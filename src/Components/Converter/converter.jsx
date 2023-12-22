import React, {useState} from "react";
import Buttons from "../Button/button"
import converter from "./converter.module.css"



function CelsiusConverter(){

    const [celsius, setCelsius] = useState();
    const [result, setResult] = useState();

    const handleChange = (e) => {
        setCelsius(parseFloat(e.target.value));
    }

    const convertKelvin = () => {
        const kelvin = celsius + 273.15;
        if(!isNaN(celsius)){
            setResult(`Kelvin ${kelvin}`)
        }else{
            setResult("Enter a valid value")
        }
    }

    const convertFahrenheit = () => {
        const fahrenheit = (celsius * 9/5) + 32;
        if(!isNaN(celsius)){
            setResult(`Fahrenheit ${fahrenheit}`)
        }else{
            setResult("Enter a valid value")
        }
    }

    return (
        <>
            <div className={converter.wrapper}>
                <div className={converter.overlay}>
                    <h1 className={converter.title}>Temperature Converter</h1>
                    <input type="number" className={converter.input}  onChange={handleChange} required/>
                    <Buttons btnKelvin={convertKelvin} btnFahrenheit={convertFahrenheit}/>
                    <span className={converter.result}>{result}</span>
                </div>
            </div>
        </>
    )

}


export default CelsiusConverter;