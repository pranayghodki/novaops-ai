from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ai import ask_nova

app = FastAPI()

# Enable CORS so React frontend can call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "NovaOps AI running"}


@app.get("/analyze")
def analyze(log: str):

    prompt = f"""
You are an expert Kubernetes DevOps engineer.

Analyze the following error and respond in this format:

1. Problem
Explain what the error means.

2. Possible Causes
List common reasons why this happens.

3. Diagnosis Commands
Give kubectl commands to investigate.

4. Fix Commands
Give exact kubectl commands to fix the issue.

Error:
{log}
"""

    result = ask_nova(prompt)

    return {"result": result}