from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str


@app.post("/chat")
def chat(req: ChatRequest):

    r = requests.post(
        "http://127.0.0.1:11434/api/generate",
        json={
            "model": "phi3",
            "prompt": req.message,
            "stream": False
        }
    )

    data = r.json()

    print("OLLAMA:", data)   # debug

    return {
        "response": data["response"]
    }