import { useState, useEffect } from 'react'
// import './App.css'
import {InputBox} from "./components/InputBox";
import {useCurrencyInfo} from "./hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  let options = [];
  if(currencyInfo)
    options = Object.keys(currencyInfo);

  const handleSubmit = (event) => {
    event.preventDefault();    // this prevents from reloading the whole page on clicking the button.

    // Difference between using "."(dot) operator and brackets for accessing some data - written in useCurrencyInfo.js
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={handleSubmit}
          >
            <div className="w-full mb-1">

            <InputBox 
              label = "From"
              amount = {amount}
              onAmountChange = {(amount) => setAmount(amount)}
              onCurrencyChange = {(currency) => setFrom(currency)}
              currencyOptions = {options}
              selectCurrency = {from}
              amountDisable = {false}
              />
            </div>

            <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
            >
                swap
            </button>

            <div className="w-full mt-1 mb-4">
              <InputBox 
                label = "to"
                amount = {convertedAmount}
                onCurrencyChange = {(currency) => setTo(currency)} 
                currencyOptions = {options}
                selectCurrency = {to}
                amountDisable = {true}
                currencyDisable = {false}

              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert usd to inr
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
