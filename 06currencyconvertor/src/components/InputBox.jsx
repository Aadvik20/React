import React, {useId} from 'react'

function InputBox({
    label,
    amount,onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className="",
}) {
    const amountInputId = useId()
    return (
        <div className={` bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className=" w-1/2">
                <label htmlFor={amountInputId} className=" text-black/40 mb-2 d-inline-block">{label}</label>
                <input id={amountInputId} className=" outline-none bg-transparent py-1.5 w-full" type='number' value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} placeholder="" />
            </div>
            <div className=" w-1/2 flex flex-wrap justify-content-end text-right">
                    <p className=" text-black/40 w-full mb-2">Currency Type</p>
                    <select className=" rouded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
            </div>
        </div>
    )
}

export default InputBox;
