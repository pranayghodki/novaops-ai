import { useState } from "react";

function App() {
  const [log, setLog] = useState("");
  const [result, setResult] = useState("");

  const analyzeLog = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/analyze?log=" + encodeURIComponent(log)
    );

    const data = await response.json();

    console.log(data); // debugging

    const text =
      data.result.output.message.content[0].text;

    setResult(text);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
     <h1>NovaOps AI — DevOps Troubleshooting Assistant</h1>
<p>Paste your Kubernetes / DevOps error below and get AI-powered fixes.</p>
      <textarea
        rows="6"
        cols="60"
        placeholder="Paste DevOps error here..."
        value={log}
        onChange={(e) => setLog(e.target.value)}
      />

      <br /><br />

<input type="file" />

      <button onClick={analyzeLog}>Analyze</button>

      <h3>Result</h3>

      <pre style={{background:"black",color:"lime",padding:"20px"}}>
{result}
</pre>
    </div>
  );
}

export default App;