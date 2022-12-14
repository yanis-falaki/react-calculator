import { useState } from "react"

function App() {

  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const ops = ['/', '*', '+', '-', '.']

  const updateCalc = value => {
    if (ops.includes(value) && calc === "" ||
        ops.includes(value) && ops.includes(calc.slice(-1))){
          return
        }
    else if (value === "DEL") {
          setCalc(calc.slice(0, -1))
          setResult(eval(calc.slice(0, -1)).toString())
          return
        }

    setCalc(calc + value)

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  const createDigits = () => {
    const digits = [];

    for (let i =  1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} 
        key={i}>{i}</button>
      )
    }
    return digits;
    }

    const calculate = () => {
      setCalc(eval(calc).toString())
    }


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={() => updateCalc('DEL')}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button>0</button>
          <button>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
