import React from "react";
import buttons from "./button.module.css"

const Buttons = ({btnKelvin, btnFahrenheit}) => {

    return (
        
        <>
            <div className={buttons.wrapper}>
                <button className={buttons.btn} onClick={btnKelvin}>Convert Kelvin</button>
                <button className={buttons.btn} onClick={btnFahrenheit}>Convert Fahrenheit</button>
            </div>
        </>
    )

}


export default Buttons