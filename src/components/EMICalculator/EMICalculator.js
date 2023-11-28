import { useState } from 'react';
import './EMICalculator.css';

const EMICalculator = (props) => {

    const [amount, setAmount] = useState(0);
    const [years, setYears] = useState(0);
    const [rate, setRate] = useState(0);
    const [calculate, setCalculate] = useState(0);
    const [showResult, setShowResult] = useState({ display: "none" });

    const amountChange = (e) => {
        setAmount(e.target.value);
    }

    const yearChange = (e) => {
        setYears(e.target.value);
    }

    const rateChange = (e) => {
        setRate(e.target.value);
    }

    const calculateEMI = () => {
        if (amount === 0 || years === 0 || rate === 0) {
            alert("All input fields are required.");
        } else {
            var p = amount;
            var r = parseFloat(rate) / (12 * 100);
            var n = years * 12;

            let emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

            setCalculate(emi.toFixed(0));
            setShowResult({
                display: "block"
            });
        }

    }

    return (
        <div className='container-fluid bg-black text-white' id='emi-box'>
            <h2 className='text-center'>{props.title}</h2>
            <div className='border border-warning'>
                <div className='row p-4 m-4 text-center'>
                    <div className='col'>
                        Amount You need <input className='form-control rounded-0' type="text" value={amount} /> (in rupees)
                    </div>
                    <div className='col'>
                        For <input className='form-control rounded-0' type="text" size="4" value={years} /> (in years)
                    </div>
                    <div className='col'>
                        Interest Rate <input className='form-control rounded-0' type="text" size="4" value={rate} /> (in %)
                    </div>
                </div>
                <div className='row p-4 m-4 text-center'>
                    <div className='col'>
                        Min: &#8377; 50,000 <input className='form-range' onChange={amountChange} type="range" min="50000" max="1000000" /> Max: &#8377; 10,00,000
                    </div>
                    <div className='col'>
                        Min: 1 <input className='form-range' onChange={yearChange} type="range" min="1" max="5" /> Max: 5
                    </div>
                    <div className='col'>
                        Min: 10.5% <input className='form-range' onChange={rateChange} type="range" min="10.5" max="18.5" step="0.1" /> Max: 18.25%
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <div className='row'>
                    <div className='col text-center'>
                        <button onClick={calculateEMI} className='btn btn-outline-warning rounded-0 clcBtn'>Calculate</button>
                    </div>
                </div>
            </div>
            <div className='text-center mt-4' id='result' style={showResult}>
                <p>Your Monthly EMI will be <strong> ₹{calculate}</strong> /month.</p>
            </div>
        </div>
    )
}

export default EMICalculator;