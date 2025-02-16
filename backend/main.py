from fastapi import FastAPI
from pydantic import BaseModel
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

app = FastAPI()

# Load LLaMA model and tokenizer (adjust for your specific model)
MODEL_NAME = "meta-llama/Llama-2-7b-chat-hf"  # Change based on your model
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForCausalLM.from_pretrained(MODEL_NAME, torch_dtype=torch.float16, device_map="auto")

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    input_text = f"User: {request.message}\nBot:"
    inputs = tokenizer(input_text, return_tensors="pt").to("cuda")
    
    with torch.no_grad():
        output = model.generate(**inputs, max_length=150)
    
    response = tokenizer.decode(output[0], skip_special_tokens=True)
    return {"response": response.replace(input_text, "").strip()}
