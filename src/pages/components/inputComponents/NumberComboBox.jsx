import React, { useEffect, useState } from "react";
import Style from './inputComponents.module.scss';
function NumberComboBox({ number, SetNumber }) {
    const [inputNumber, setInputNumber] = useState(number);

    useEffect(() => {
        const delayedCheck = setTimeout(() => {
            SetNumber(inputNumber);
        }, 500);
        return () => {
            clearTimeout(delayedCheck);
        };
    }, [inputNumber]);

    return <div className={Style.NumberComboBoxContainer}>
        <a className={Style.decreaseBtn}
            onClick={() => setInputNumber(prev => prev - 1)}
        >-</a>
        <p className={Style.value}>{inputNumber}</p>
        <a className={Style.increaseBtn}
            onClick={() => setInputNumber(prev => prev + 1)}
        >+</a>
    </div>;
}

export default NumberComboBox;
