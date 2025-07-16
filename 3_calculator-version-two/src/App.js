import logo from './logo.svg';
import styles from './App.module.css';
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';

function App() {

  const[calcVal, setCalcVal] = useState("");

  const onButtonClick = (btnVal) => {
    console.log(`Button is clicked ${btnVal}`)
    if (btnVal === 'C') {
      let newDisplayVal = "";
      setCalcVal("");
    }else if (btnVal === '=') {
      let newDisplayVal = eval(calcVal);
      setCalcVal(newDisplayVal);
    }else{
      let newDisplayVal = calcVal + btnVal;
      setCalcVal(newDisplayVal);
    }
  }

  return<div className={styles["calculator-body"]}>
  <div className={styles["calculator-container"]}>
    <Display displayValue={calcVal}></Display>
    <ButtonContainer onButtonClick = {onButtonClick}></ButtonContainer>
  </div>
  </div> ;
}

export default App;
