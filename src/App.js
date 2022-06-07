import Display from "./components/display/Display"
import Button from './components/buttons/Button';

import './App.css';
import { useState } from "react";

const App = () => {

  const [result, setResult] = useState("");

  const Btns = [];
  const operators = ['+', '-', '/', '*'];
  const CreateBtns = () => {
    for (let i = 9; i > 0; i--) {
      Btns.push(<Button value={i} key={i - 1} functionname={managekeys} />);
    }
    return Btns;
  }

  const managekeys = (e) => {
    setResult(result.concat(e.target.name));
  }

  const Operatorsbtns = () => {
    Btns.splice(0, Btns.length);
    for (let i = 0; i < operators.length - 1; i++) {
      Btns.push(<Button value={operators[i]} key={100 - i} functionname={managekeys} />);
    }
    return Btns;
  }

  const GetResult = (e) => {
    if (e.target.name == "Result") {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult("error");
      }
    }
    if (e.target.name == "CE") {
      setResult("");
    }
    if (e.target.name == "C") {
      setResult(result.slice(0, -1));
    }
  }

  return (
    <div className="calc-app">
      <Display result={result} />
      <div className="calc-keys">
        <Button value="Result" key="a" functionname={GetResult} />
        <Button value="CE" key="b" functionname={GetResult} />
        <Button value="C" key="c" functionname={GetResult} />
      </div>
      <div className="number-keys">
        <CreateBtns />
        <Operatorsbtns />
      </div>
    </div>
  )
}

export default App