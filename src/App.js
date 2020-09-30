import React, { useState } from "react";
import "./styles.css";
import Button from "./components/Button";

export default function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);
  const handleNumberClicked = (number) => {
    return !operator
      ? setFirstNumber(firstNumber + number)
      : setSecondNumber(secondNumber + number);
  };
  const handleOperatorClicked = (operator) => {
    return setOperator(operator);
  };
  const handleReset = () => {
    setFirstNumber("");
    setOperator("");
    setSecondNumber("");
    setResult(0);
  };
  const handleCalculation = () => {
    const parseFirstNum = parseInt(firstNumber, 10);
    const parseSecondNum = parseInt(secondNumber, 10);
    switch (operator) {
      case "+":
        setResult(parseFirstNum + parseSecondNum);
        break;
      case "-":
        setResult(parseFirstNum - parseSecondNum);
        break;
      case "x":
        setResult(parseFirstNum * parseSecondNum);
        break;
      case "/":
        setResult(parseFirstNum / parseSecondNum);
        break;
    }
  };

  const display = !secondNumber
    ? firstNumber || result
    : result || secondNumber;

  return (
    <div className="App">
      <div>
        <span>
          <h1>{display}</h1>
        </span>
      </div>
      <div>
        <Button onClick={() => handleNumberClicked("1")}>1</Button>
        <Button onClick={() => handleNumberClicked("2")}>2</Button>
        <Button onClick={() => handleNumberClicked("3")}>3</Button>
      </div>
      <div>
        <Button onClick={() => handleNumberClicked("4")}>4</Button>
        <Button onClick={() => handleNumberClicked("5")}>5</Button>
        <Button onClick={() => handleNumberClicked("6")}>6</Button>
      </div>
      <div>
        <Button onClick={() => handleNumberClicked("7")}>7</Button>
        <Button onClick={() => handleNumberClicked("8")}>8</Button>
        <Button onClick={() => handleNumberClicked("9")}>9</Button>
        <Button onClick={() => handleNumberClicked("0")}>0</Button>
      </div>
      <div>
        <Button onClick={() => handleOperatorClicked("+")}>+</Button>
        <Button onClick={() => handleOperatorClicked("-")}>-</Button>
        <Button onClick={() => handleOperatorClicked("x")}>x</Button>
        <Button onClick={() => handleOperatorClicked("/")}>/</Button>
        <Button onClick={handleCalculation}>=</Button>
      </div>
      <div>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}
