import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Colors from "./Colors";
import "./App.css";

const App = () => {
  const [colors, setColors] = useState(Colors);
  const [background, setBackground] = useState("#151A21");
  const [current, setCurrent] = useState(null);


  return (
    <div style={{ background: background }} className="App">
      {current !== null && <h1>Copied: {current}</h1>}
      <div className="container">
        {colors.map((color, index) => (
          <div key={index} className="card">
            <div

              style={{
                background: color.hex,
                filter: "brightness(85%)",
                boxShadow: color.hex === background ? "0 0 5px #000" : ""
              }}
              className="box"
            />
            <CopyToClipboard text={`${color.hex}`}>
              <p
                onClick={() => setCurrent(color.hex)}
                style={{ color: color.hex === background ? "#fff" : color.hex }}
              >
                {color.hex}
              </p>
            </CopyToClipboard>

          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
