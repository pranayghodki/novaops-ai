from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ai import ask_nova

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "NovaOps AI running"}

@app.get("/analyze")
def analyze(log: str):

    result = ask_nova(log)

    return {
        "result": result
    }