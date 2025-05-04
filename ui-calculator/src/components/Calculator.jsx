import React, {useState} from 'react';
const digits =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const operators = ['+', '-','x','÷']

const Calculator = () =>{
    const[input, setInput] = useState('');
    const[input2, setInput2] = useState('');
    const[result, setResult] = useState('');
    const[operator, setOperator] = useState('');

    const handleButtonClick = (value) =>{
        if(!operator){
            setInput((prev)=> (prev +value).slice(0,2));
        }else{
            setInput2((prev)=> (prev +value).slice(0,2));
        }
    };

    const handleOpClick = (op) =>{
        if(input && !operator){
          setOperator(op);  
        }
        
    };

    const handleClear = () =>{
        setInput('');
        setInput2('');
        setOperator('');
        setResult('');
    }
    const handleEquals = () =>{
        setResult(`${input}${operator}${input2}`)
    }

    return(
        <div className='calculator'>
            <h2>Hex Calculator</h2>

            <div className='Screen'>
                <p>Input: {input}</p>
                <p>Operator: {operator}</p>
                <p>Input2: {input2}</p>
                <p>Result: {result}</p>
            </div>

            <div className='buttons'>
            {digits.map((digit) => (
                <button key={digit} onClick={()=> handleButtonClick(digit)}>
                    {digit}
                </button>
            ))}
            {operators.map((operator) => (
                <button key={operator} className='operator' onClick={()=> handleOpClick(operator)}>
                    {operator}
                </button>
            ))}
            <button className='clear' onClick={handleClear}>Clear</button>
            <button className='equals'onClick={handleEquals}>=</button>
            
            </div>

        </div>
    );
};

export default Calculator;