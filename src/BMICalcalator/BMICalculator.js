import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator = () => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [calculate, setCalculate] = useState(0);
    const [showResult, setShowResult] = useState({ display: "none" });
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    const changeHeight = (e) => {
        setHeight(e.target.value);
    }
    const changeWeight = (e) => {
        setWeight(e.target.value);
    }

    const calculateBMI = () => {
        if (height === "" || weight === "") {
            setError("*input field required");
        } else {
            var h = height;
            var w = weight;

            let bmi = w / Math.pow(h / 100, 2);

            setCalculate(bmi.toFixed(1));
            setShowResult({
                display: "block"
            });
            setError("");

            if (bmi < 18) {
                setMsg("Time to grab a bite!");
            }
            else if (bmi >= 18 && bmi <= 25) {
                setMsg("Great Shape");
            }
            else {
                setMsg("Time to run!");
            }
        }
    }

    const relaodPage = () => {
        window.location.reload();
    }

    return (
        <div className='container-fluid bg-black text-white' id='bmi-box'>
            <h4 className='text-center'>BMI (Body Mass Index) Calculator</h4>
            <div className='border border-warning'>
                <div className='row p-4 m-4'>
                    <div className='col'>
                        Height <input className='form-control p-2 rounded-0' onChange={changeHeight} type="number" placeholder='in cm' />
                        <small className='float-start text-danger mt-1'>{error}</small>
                    </div>
                    <div className='col'>
                        Weights <input className='form-control p-2 rounded-0' onChange={changeWeight} type="number" placeholder='in Kgs' />
                        <small className='float-start text-danger mt-1'>{error}</small>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <div className='text-center'>
                    <button onClick={calculateBMI} className='btn btn-warning rounded-0 me-2 py-2' style={{fontSize: "15px"}}>Calculate</button>
                    <button onClick={relaodPage} className='btn btn-info rounded-0 me-2 py-2'>
                        <i class="fa-solid fa-rotate-right"></i>
                    </button>
                </div>
            </div>
            <div className='text-center mt-4' id='result' style={showResult}>
                <p className='d-flex flex-column gap-3'>Your BMI: {calculate}
                    <b>{msg}</b>
                </p>
            </div>
        </div>
    )
}

export default BMICalculator;