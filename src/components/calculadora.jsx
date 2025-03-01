import { useState } from 'react'
import Input from './input';


function Calculadora() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(0);

    const handleValue1Change = (e) => setValue1(Number(e.target.value));
    const handleValue2Change = (e) => setValue2(Number(e.target.value));
    const handleOperationChange = (e) => setOperation(e.target.value);

    const calculateResult = () => {
        let res;
        switch (operation) {
            case '+':
                res = value1 + value2;
                break;
            case '-':
                res = value1 - value2;
                break;
            case 'x':
                res = value1 * value2;
                break;
            case '/':
                res = value2 !== 0 ? value1 / value2 : 'Error';
                break;
            default:
                res = 0;
        }
        setResult(res);
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='row'>
            <div className='col'>
                <Input value={value1} onChange={handleValue1Change} />
            </div>
            <div className='col'>
                <select value={operation} onChange={handleOperationChange} className='form-select border-dark borderWidth: 3 rounded-pill'>
                    <option value='+'>+</option>
                    <option value='-'>-</option>
                    <option value='x'>x</option>
                    <option value='/'>/</option>
                </select>
            </div>
            <div className='col'>
                <Input value={value2} onChange={handleValue2Change} />
            </div>
            <div className='col'>
                <button onClick={calculateResult} className='btn btn-primary '>Calcular</button>
            </div>
            <div className='col'>
                <div className='bg-light border-dark rounded p-3'>
                    Resultado: {result}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Calculadora;