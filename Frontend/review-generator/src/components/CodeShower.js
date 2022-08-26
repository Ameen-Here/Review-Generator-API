import { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classes from "./CodeShower.module.css";

const CodeShower = (e) => {
  const browserCodeRef = useRef();
  const [copyBtnText, setCopyBtnText] = useState("Copy to Clipboard");
  const [copiedValue, setCopiedValue] = useState(
    "https://lit-chamber-70662.herokuapp.com/v1/review?apiKey=6e97db3d-269c-4309-ad0a-72ffb83cc0d5"
  );

  const [btnActive, setBtnActive] = useState({
    browser: true,
    curl: false,
    python: false,
    node: false,
    php: false,
  });

  console.log(btnActive.browser);

  const browserClass = btnActive.browser ? "active" : "";
  const curlClass = btnActive.curl ? "active" : "";
  const pythonClass = btnActive.python ? "active" : "";
  const nodeClass = btnActive.node ? "active" : "";
  const phpClass = btnActive.php ? "active" : "";

  const copyBtnHandler = () => {
    setCopyBtnText("Copied To Clipboard!!!");
    setTimeout(() => {
      setCopyBtnText("Copy to Clipboard");
    }, 3000);
  };

  const browserBtnHandler = () => {
    setCopiedValue(
      `https://lit-chamber-70662.herokuapp.com/v1/review?apiKey=6e97db3d-269c-4309-ad0a-72ffb83cc0d5`
    );
    setBtnActive({
      browser: true,
      curl: false,
      python: false,
      node: false,
      php: false,
    });
  };

  const curlBtnHandler = () => {
    setCopiedValue(
      `curl "https://lit-chamber-70662.herokuapp.com/v1/review?apiKey=6e97db3d-269c-4309-ad0a-72ffb83cc0d5" `
    );
    setBtnActive({
      browser: false,
      curl: true,
      python: false,
      node: false,
      php: false,
    });
  };

  const pythonBtnHandler = () => {
    setCopiedValue(
      `curl "https://app.reviewapi.io/api/v1/batches/kzPdyP7bQr?apikey=YOUR-APIKEY" `
    );
    setBtnActive({
      browser: false,
      curl: false,
      python: true,
      node: false,
      php: false,
    });
  };

  const nodeBtnHandler = () => {
    setCopiedValue(
      `curl "https://app.reviewapi.io/api/v1/batches/kzPdyP7bQr?apikey=YOUR-APIKEY" `
    );
    setBtnActive({
      browser: false,
      curl: false,
      python: false,
      node: true,
      php: false,
    });
  };

  const phpBtnHandler = () => {
    setCopiedValue(
      `curl "https://app.reviewapi.io/api/v1/batches/kzPdyP7bQr?apikey=YOUR-APIKEY" `
    );
    setBtnActive({
      browser: false,
      curl: false,
      python: false,
      node: false,
      php: true,
    });
  };

  return (
    <div className={classes.mainBox}>
      <div className={classes.prgmOption}>
        <div className={classes.options}>
          <button className={classes[browserClass]} onClick={browserBtnHandler}>
            BROWSER
          </button>
          <button className={classes[curlClass]} onClick={curlBtnHandler}>
            CURL
          </button>
          <button className={classes[pythonClass]} onClick={pythonBtnHandler}>
            PYTHON
          </button>
          <button className={classes[nodeClass]} onClick={nodeBtnHandler}>
            NODE.JS
          </button>
          <button className={classes[phpClass]} onClick={phpBtnHandler}>
            PHP
          </button>
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
            https://lit-chamber-70662.herokuapp.com/v1/review?apiKey=6e97db3d-269c-4309-ad0a-72ffb83cc0d5
          </div>
        </pre>
      </div>
    </div>
  );
};

export default CodeShower;
