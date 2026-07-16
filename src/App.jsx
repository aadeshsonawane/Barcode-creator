import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>QR Code Generator</h2>

      <input
        type="text"
        placeholder="Enter any text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
        }} 
      />      
        <div>
          <QRCodeSVG value={text} size={200} />
        </div>
  
    </div>
  );
}

export default App;