import React, { useState, useEffect } from 'react';
import dollar from '../assets/icon-dollar.svg';
import personlogo from '../assets/icon-person.svg';

const Tip = () => {
    const [bill, setBill] = useState('');
    const [errorBill, setErrorBill] = useState(false);
    const [tip, setTip] = useState('');
    const [errorTip, setErrorTip] = useState(false);
    const [person, setPerson] = useState('');
    const [errorPerson, setErrorPerson] = useState(false);
    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [selectedTip, setSelectedTip] = useState(null);

    const handleBill = (e) => {
        setBill(e.target.value);
    };

    const handleTipButton = (e) => {
        setTip(e.target.dataset.value);
        setSelectedTip(e.target.dataset.value);
    };

    const handleTipInput = (e) => {
        setTip(e.target.value);
        setSelectedTip(null); // Reset button selection when custom input is used
    };

    const handlePerson = (e) => {
        setPerson(e.target.value);
    };

    const resetAll = () => {
        setBill('');
        setTip('');
        setPerson('');
        setTipAmount(0);
        setTotal(0);
        setSelectedTip(null);
    };

    useEffect(() => {
        const verifFields = () => {
            setErrorBill(bill === '' || isNaN(bill) || Number(bill) <= 0);
            setErrorTip(tip === '' || isNaN(tip) || Number(tip) <= 0);
            setErrorPerson(person === '' || isNaN(person) || Number(person) <= 0);
        };

        verifFields();

        if (!errorBill && !errorTip && !errorPerson && bill !== '' && tip !== '' && person !== '') {
            const calculatedTipAmount = (Number(bill) * (Number(tip) / 100)) / Number(person);
            setTipAmount(calculatedTipAmount);
            setTotal(Number(bill) / Number(person) + calculatedTipAmount);
        }
    }, [bill, tip, person, errorBill, errorTip, errorPerson]);

    const isValid = !errorBill && !errorTip && !errorPerson && bill !== '' && tip !== '' && person !== '';

    return (
        <div className="bg-White p-8 rounded-tr-3xl rounded-tl-3xl lg:flex lg:justify-between">
            <div className="lg:w-half">
                <div className="mb-6 relative">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-DarkGrayishCyan mb-3">Bill</h2>
                        <h2 className="font-semibold text-Red mb-3">{errorBill ? "Can't be zero or text" : ''}</h2>
                    </div>
                    <input
                        className={`font-bold outline-none hover:outline-StrongCyan ${errorBill ? 'border-2 border-Red' : ''} text-VeryDarkCyan text-xl cursor-pointer placeholder:text-GrayishCyan bg-VeryLightGrayishCyan rounded-md text-right py-2 w-full pr-4`}
                        type="text"
                        placeholder="0"
                        value={bill}
                        onChange={handleBill}
                    />
                    <img className="absolute top-12 left-4" src={dollar} alt="" />
                </div>
                <div className="mb-6">
                    <h2 className="font-semibold text-DarkGrayishCyan mb-3">Select Tip %</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {["5", "10", "15", "25", "50"].map((value) => (
                            <button
                                key={value}
                                className={`font-semibold py-2 rounded-md ${selectedTip === value ? 'bg-StrongCyan text-VeryDarkCyan' : 'bg-VeryDarkCyan text-White'}`}
                                data-value={value}
                                onClick={handleTipButton}
                            >
                                {value}%
                            </button>
                        ))}
                        <input
                            className="font-bold text-VeryDarkCyan outline-none text-xl cursor-pointer hover:outline-StrongCyan placeholder:text-DarkGrayishCyan bg-VeryLightGrayishCyan rounded-md text-right pr-4"
                            type="text"
                            onChange={handleTipInput}
                            placeholder="Custom"
                        />
                    </div>
                </div>
                <div className="mb-6 relative">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-DarkGrayishCyan mb-3">Number of People</h2>
                        <h2 className="font-semibold text-Red mb-3">{errorPerson ? "Can't be zero or text" : ''}</h2>
                    </div>
                    <input
                        className={`font-bold outline-none hover:outline-StrongCyan text-VeryDarkCyan text-xl cursor-pointer ${errorPerson ? 'border-2 border-Red' : ''} placeholder:text-GrayishCyan bg-VeryLightGrayishCyan rounded-md text-right py-2 w-full pr-4`}
                        type="text"
                        placeholder="0"
                        value={person}
                        onChange={handlePerson}
                    />
                    <img className="absolute top-12 left-4" src={personlogo} alt="" />
                </div>
            </div>
            <div className="bg-VeryDarkCyan p-5 rounded-xl lg:w-half lg:p-10 lg:flex lg:flex-col lg:justify-between">
                <div className="lg:mt-5">
                    <div className="flex justify-between items-center mb-5">
                        <div className="text-White font-semibold">
                            <p className="text-sm">Tip Amount</p>
                            <span className="text-sm text-DarkGrayishCyan">/ person</span>
                        </div>
                        <span className="text-3xl text-StrongCyan font-semibold">${tipAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <div className="text-White font-semibold">
                            <p className="text-sm">Total</p>
                            <span className="text-sm text-DarkGrayishCyan">/ person</span>
                        </div>
                        <span className="text-3xl text-StrongCyan font-semibold">${total.toFixed(2)}</span>
                    </div>
                </div>
                <button
                    className={`text-center ${isValid ? 'bg-StrongCyan text-VeryDarkCyan' : 'bg-DarkGrayishCyan text-VeryDarkCyan'} font-bold w-full py-2 rounded-md lg:justify-self-end`}
                    onClick={resetAll}
                >
                    RESET
                </button>
            </div>
        </div>
    );
};

export default Tip;
