# 🚀 NovaOps AI

AI-powered DevOps troubleshooting assistant that analyzes Kubernetes and infrastructure error logs and provides root cause analysis along with suggested fix commands.

NovaOps AI helps DevOps engineers debug issues faster using Generative AI.

---

# 🧠 Problem

DevOps engineers spend a lot of time debugging infrastructure logs such as:

- Kubernetes pod failures
- Docker container crashes
- CI/CD pipeline errors
- Infrastructure configuration issues

Manual debugging is slow and error-prone.

---

# 💡 Solution

NovaOps AI analyzes DevOps logs using **AWS Bedrock (Nova AI)** and instantly provides:

- Root cause analysis
- Possible causes
- Fix steps
- Useful DevOps commands

---

# ⚙️ Features

✅ AI-powered DevOps troubleshooting  
✅ Kubernetes error analysis  
✅ Docker log debugging  
✅ File upload support  
✅ Modern React UI  
✅ FastAPI backend  
✅ AWS Bedrock integration  

---

# 🧰 Tech Stack

Frontend  
- React

Backend  
- FastAPI  
- Python

AI  
- AWS Bedrock (Nova AI)

---

# 📸 Demo

Example Input

```
CrashLoopBackOff
```

Example Output

```
Issue
CrashLoopBackOff

Possible Causes
- Application crash
- Incorrect environment variables
- Memory limits exceeded

Fix Steps
1. kubectl logs <pod>
2. kubectl describe pod <pod>
3. Check container resource limits
```

---

# 📂 Project Structure

```
novaops-ai
│
├── backend
│   ├── main.py
│   ├── ai.py
│
├── frontend
│   ├── src
│   │   └── App.jsx
│
└── README.md
```

---

# ⚡ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/novaops-ai.git
```

Go to project folder

```bash
cd novaops-ai
```

---

# ▶️ Run Backend

Install dependencies

```bash
pip install -r requirements.txt
```

Run FastAPI server

```bash
uvicorn main:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

---

# ▶️ Run Frontend

Go to frontend folder

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Start React app

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🧪 Example Usage

Paste DevOps error:

```
CrashLoopBackOff
```

Click **Analyze**

NovaOps AI will generate troubleshooting steps instantly.

---

# 🏆 Hackathon Project

NovaOps AI was built as a hackathon project to demonstrate how generative AI can assist DevOps engineers in diagnosing infrastructure issues quickly.

---

# 👨‍💻 Author

Pranay Ghodki

---

# ⭐ Future Improvements

- AI chat interface
- Real log parsing
- Kubernetes cluster integration
- Automated fix commands
