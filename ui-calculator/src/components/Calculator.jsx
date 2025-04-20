import React, {useState} from 'react';
const digits =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const operators = ['+', '-','x','÷']

const Calculator = () =>{
    const[input, setInput] = useState('');
    const[result, setResult] = useState('');

    const handleButtonClick = (value) =>{
        setInput((prev)=> prev +value);
    };

    const handleClear = () =>{
        setInput('');
        setResult('');
    }

    return(
        <div>
            <h2>Hex Calculator</h2>

            <div>
                <p>Input: {input}</p>
                <p>Result: {result}</p>
            </div>

            <div className='buttons'>
            {digits.map((digit) => (
                <button key={digit} onClick={()=> handleButtonClick(digit)}>
                    {digit}
                </button>
            ))}
            {operators.map((operator) => (
                <button key={operator} className='operator' onClick={()=> handleButtonClick(operator)}>
                    {operator}
                </button>
            ))}
            <button className='clear' onClick={handleClear}>Clear</button>
            <button className='equals'>=</button>
            
            </div>

        </div>
    );
};

export default Calculator;