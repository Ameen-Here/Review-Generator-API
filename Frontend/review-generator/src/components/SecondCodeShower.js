import { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classes from "./CodeShower.module.css";
import CurlValueReviews from "./CurlValueReviews";
import NodeValueReviews from "./nodeValueReviews";
import PhpValueReviews from "./phpValueReviews";
import PythonValueReviews from "./PythonValueReviews";

const SecondCodeShower = () => {
  const browserCodeRef = useRef();
  const [copyBtnText, setCopyBtnText] = useState("Copy to Clipboard");
  const [copiedValue, setCopiedValue] = useState(
    "https://lit-chamber-70662.herokuapp.com/v1/review?apiKey=6e97db3d-269c-4309-ad0a-72ffb83cc0d5"
  );

  const [valueToShow, setValueToShow] = useState(
    "https://lit-chamber-70662.herokuapp.com/v1/review?apiKey=6e97db3d-269c-4309-ad0a-72ffb83cc0d5"
  );

  const [btnActive, setBtnActive] = useState({
    browser: true,
    curl: false,
    python: false,
    node: false,
    php: false,
  });

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
      `https://lit-chamber-70662.herokuapp.com/v1/reviews?apiKey=3e46dd50-4d99-4507-a817-173c741e9034&qty=10&country=us,uk&review=good`
    );

    setValueToShow(
      `https://lit-chamber-70662.herokuapp.com/v1/reviews?apiKey=3e46dd50-4d99-4507-a817-173c741e9034&qty=10&country=us,uk&review=good`
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
      `curl "https://lit-chamber-70662.herokuapp.com/v1/reviews?apiKey=3e46dd50-4d99-4507-a817-173c741e9034&qty=10&country=us,uk&review=good"`
    );
    setValueToShow(<CurlValueReviews />);
    setBtnActive({
      browser: false,
      curl: true,
      python: false,
      node: false,
      php: false,
    });
  };

  const pythonBtnHandler = () => {
    setValueToShow(<PythonValueReviews />);
    setCopiedValue(`import requests

    headers = { 
      "apikey": "3e46dd50-4d99-4507-a817-173c741e9034"
    }
    
    params = (
        ("qty","10"),
        ("country","us,uk"),
        ("review","good")
    );
    
    response = requests.get('https://lit-chamber-70662.herokuapp.com/v1/reviews', headers=headers, params=params);
    print(response.text)`);
    setBtnActive({
      browser: false,
      curl: false,
      python: true,
      node: false,
      php: false,
    });
  };

  const nodeBtnHandler = () => {
    setCopiedValue(`var request = require('request');

    var options = { 
      url: 'https://lit-chamber-70662.herokuapp.com/v1/reviews?apiKey=3e46dd50-4d99-4507-a817-173c741e9034&qty=10&country=us,uk&review=good' 
    };
    
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }
    
    request(options, callback);`);
    setValueToShow(<NodeValueReviews />);
    setBtnActive({
      browser: false,
      curl: false,
      python: false,
      node: true,
      php: false,
    });
  };

  const phpBtnHandler = () => {
    setValueToShow(<PhpValueReviews />);
    setCopiedValue(
      `$ch = curl_init();

      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_HEADER, false);
      
      $data = [
        "qty" => "10",
        "country" => "us,uk",
        "review" => "good",
      ];
      
      curl_setopt($ch, CURLOPT_URL, "https://lit-chamber-70662.herokuapp.com/v1/reviews?" . http_build_query($data));
      curl_setopt($ch, CURLOPT_HTTPHEADER, array(
          "Content-Type: application/json",
          "apikey: 3e46dd50-4d99-4507-a817-173c741e9034",  
      ));
      
      $response = curl_exec($ch);
      curl_close($ch);
      
      $json = json_decode($response);
      
      var_dump($json); `
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
            {valueToShow}
          </div>
        </pre>
      </div>
    </div>
  );
};

export default SecondCodeShower;
