import { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classes from "./CodeShower.module.css";

const CodeShower = (e) => {
  const browserCodeRef = useRef();
  const [copyBtnText, setCopyBtnText] = useState("Copy to Clipboard");
  const [copiedValue, setCopiedValue] = useState("");
  const copyBtnHandler = () => {
    setCopiedValue(browserCodeRef.current.innerText);
    setCopyBtnText("Copied To Clipboard!!!");
    setTimeout(() => {
      setCopyBtnText("Copy to Clipboard");
    }, 3000);
  };
  return (
    <div className={classes.mainBox}>
      <div className={classes.prgmOption}>
        <div className={classes.options}>
          <button>Browser</button>
        </div>
        <div className={classes.copyBtn}>
          <CopyToClipboard text={copiedValue}>
            <button onClick={copyBtnHandler} className={classes.copyBtn}>
              {copyBtnText}
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <div className={classes.result}>
        <pre className={classes.preCode}>
          <div className={classes.browserCode} ref={browserCodeRef}>
            https://lit-chamber-70662.herokuapp.com/v1/review?apiKey=YOUR_API_KEYhttps://lit-chamber-70662.herokuapp.com/v1/review?apiKey=6e97db3d-269c-4309-ad0a-72ffb83cc0d5
          </div>
        </pre>
      </div>
    </div>
  );
};

export default CodeShower;
