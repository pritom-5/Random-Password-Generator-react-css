import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Checkboxes, Slider } from "./components/Inputs";
import { copyToClipboardFn } from "./helper/helper";
import passwordContext from "./store/PasswordContext";

function App() {
  const { generatePasswordFn, password, strength, lengthState } =
    useContext(passwordContext);

  const [copyMessage, setCopyMessage] = useState("");

  const passwordGenerateHandler = () => {
    generatePasswordFn();
  };

  const copyHandler = async () => {
    const copiedReturnValue = await copyToClipboardFn(password);
    setCopyMessage(copiedReturnValue.message);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopyMessage("");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [copyMessage]);

  return (
    <div className="App background">
      <div id="title" className="title">
        Password Generator
      </div>
      <div id="container" className="container">
        <div
          id="password"
          className={
            password === "Password" ? "password lightPassword" : "password"
          }
        >
          <div id="password-text">{password}</div>
          <div id="copy-button" className="copyBtn">
            <button onClick={copyHandler} className="nostyleBtn">
              copy
            </button>
            {!!copyMessage && (
              <div id="copy-message" className="copyMessage">
                {copyMessage}
              </div>
            )}
          </div>
        </div>
        <div id="character-length" className="characterLength">
          <div>Character Length</div>
          <div id="length-number" className="lengthNumber">
            {lengthState}
          </div>
        </div>
        <div id="slider">
          <Slider />
        </div>
        <Checkboxes />
        <div id="strength" className="strength">
          <div id="text" className="strengthText">
            Strength
          </div>
          <div id="meter">{strength}</div>
        </div>
        <div id="generate">
          <button onClick={passwordGenerateHandler} className="generateBtn">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
