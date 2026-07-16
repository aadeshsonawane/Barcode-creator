import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

function App() {
  const [text, setText] = useState("");
  const [showQR, setShowQR] = useState(false);

  const generateQR = () => {
    if (text.trim() === "") {
      alert("Please enter some text");
      return;
    }
    setShowQR(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>QR Code</h2>

      <input className="me-3 mb-3" type="text" placeholder="Enter text..." value={text} onChange={(e) => {
          setText(e.target.value);
          setShowQR(false);
        }} style={{ padding: "10px", width: "300px" }} />

      <button className="btn btn-primary" onClick={generateQR}>Generate QR Code</button>

      <br />
  
      {showQR && (
        <QRCodeSVG value={text} size={200} />
      )}
    </div>
  );
}


export default App;