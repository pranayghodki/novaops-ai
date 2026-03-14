import { useState } from "react";

function App() {

  const [log, setLog] = useState("");
  const [result, setResult] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeLog = async () => {

    setLoading(true);

    const response = await fetch(
      "http://127.0.0.1:8000/analyze?log=" + encodeURIComponent(log)
    );

    const data = await response.json();

    setResult(data.result);
    setLoading(false);
  };

  const analyzeFile = async () => {

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    const response = await fetch("http://127.0.0.1:8000/analyze-file", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    setResult(data.result);
    setLoading(false);
  };

  return (
    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"Segoe UI"
    }}>

      <div style={{
        width:"900px",
        padding:"40px",
        borderRadius:"20px",
        background:"rgba(255,255,255,0.05)",
        backdropFilter:"blur(10px)",
        boxShadow:"0 20px 60px rgba(0,0,0,0.6)",
        color:"white"
      }}>

        <h1 style={{
          textAlign:"center",
          fontSize:"38px",
          background:"linear-gradient(90deg,#00f2fe,#4facfe)",
          WebkitBackgroundClip:"text",
          color:"transparent"
        }}>
          NovaOps AI
        </h1>

        <p style={{textAlign:"center",opacity:"0.8"}}>
          AI Powered DevOps Troubleshooting Assistant
        </p>

        <textarea
          rows="6"
          placeholder="Paste Kubernetes / DevOps error log..."
          value={log}
          onChange={(e) => setLog(e.target.value)}
          style={{
            width:"100%",
            padding:"15px",
            borderRadius:"10px",
            border:"none",
            marginTop:"20px",
            background:"#111",
            color:"#0f0",
            fontFamily:"monospace"
          }}
        />

        <br/><br/>

        <input
          type="file"
          onChange={(e)=>setFile(e.target.files[0])}
          style={{color:"white"}}
        />

        <br/><br/>

        <button
          onClick={analyzeLog}
          style={{
            padding:"12px 25px",
            borderRadius:"8px",
            border:"none",
            background:"#00c6ff",
            color:"black",
            fontWeight:"bold",
            cursor:"pointer"
          }}
        >
          Analyze Text
        </button>

        <button
          onClick={analyzeFile}
          style={{
            padding:"12px 25px",
            borderRadius:"8px",
            border:"none",
            background:"#00ff9d",
            marginLeft:"10px",
            fontWeight:"bold",
            cursor:"pointer"
          }}
        >
          Analyze File
        </button>

        <h3 style={{marginTop:"30px"}}>Result</h3>

        {loading && (
          <p style={{color:"#00f2fe"}}>Analyzing with AI...</p>
        )}

        <pre style={{
          background:"#000",
          color:"#00ff9d",
          padding:"20px",
          borderRadius:"10px",
          maxHeight:"300px",
          overflow:"auto"
        }}>
          {result}
        </pre>

      </div>

    </div>
  );
}

export default App;