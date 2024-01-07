import Display from "./comp/display";
import style from "./App.module.css";
import Button from "./comp/buttons";
import ButtonContainer from "./comp/btncont";
import "./App.css";
import { useState } from "react";
function App() {
  let [calVal, setcalVal] = useState("");
  const buttonClicked = (btnText) => {
    if (btnText == "AC") setcalVal("");
    else if (btnText == "D") {
      const newverb = calVal.slice(0, -1);
      setcalVal(newverb);
    } else if (btnText == "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else if (btnText == "+/-") {
      const result = "-" + calVal;
      setcalVal(result);
    } else {
      const newval = calVal + btnText;
      setcalVal(newval);
    }
  };
  return (
    <>
      <div className={style.calc}>
        <h1 style={{ color: "white" }}>Calculator</h1>
        <Display calVal={calVal}></Display>
        <ButtonContainer buttonClicked={buttonClicked}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
