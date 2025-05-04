import React, {useState} from 'react';
import {add ,subtract, multiply, divide} from '../math';
import{formatOutput} from '../output';
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
        if(!input || !input2 || !operator){
            setResult("incomplete input");
            return;
        }
        let result;
        switch (operator){
            case '+':
                result = add(input, input2);
                break;
            case '-':
                result = subtract(input, input2);
                break;
             case 'x':
                result = multiply(input, input2);
                break;
            case '÷':
                result = divide(input, input2);
                break;
            default:
                result = '';
        }
        
        setResult(formatOutput(parseInt(result,16)));
    }

    return(
        <div className='calculator'>
            <h2>Hex Calculator</h2>

            <div className='Screen'>
                <p>Input: {input} {operator} {input2}</p>
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