import React, {useState} from 'react';
import './App.css';
import QRCode from 'qrcode.react';

const App = () => {

  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQRcode = () => {
    setQrCode(text);
  }

  return (
    <div className='App' >
      <h1>
        QR Code Generator
      </h1>
      <input value={text} onChange={(e) => setText(e.target.value)} type='text' />
      <button onClick={generateQRcode}>Generate</button>
      {
        qrCode && (<QRCode value={qrCode} size={300} />)
      }
    </div>
  )
}

export default App
