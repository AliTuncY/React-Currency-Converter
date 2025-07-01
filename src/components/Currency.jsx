import '../css/currency.css';
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';

let BaseURL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_API_KEY"; // Replace with your actual API key


function Currency() {

const[amount, setAmount] = useState();
const[fromCurrency, setFromCurrency] = useState('USD');
const[toCurrency, setToCurrency] = useState('TRY');
const[result, setResult] = useState();

const exchange = async () => {
    // console.log(amount, fromCurrency, toCurrency);

    const response = await axios.get(`${BaseURL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
}
    return (
        <div className="currency-container">
            <h2 className="currency-title">Döviz Çevirici</h2>
            <div className="currency-box">
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="amount-input" placeholder="Miktar" />

                <select onChange={(e) => setFromCurrency(e.target.value)} className="currency-select">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaArrowRight className="arrow-icon" />

                <select onChange={(e) => setToCurrency(e.target.value)} className="currency-select">
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input type="number" value={result} readOnly onChange={(e) => setResult(e.target.value)} className="result-input" placeholder="Sonuç" />

                <button 
                onClick={exchange} className='exchange-button'>Çevir</button>
            </div>
        </div>
    );
}

export default Currency;
