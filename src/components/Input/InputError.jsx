import React from "react"
import infoIcon from "../../assets/images/icon-info.svg"
import { CounterContext } from "../../App"


export default function InputError() {
    const { options } = React.useContext(CounterContext)

    return (
        <article className="input__error">

            <figure className="input__error-icon">
                <img src={infoIcon} alt="info" />
            </figure>

            <p className="input__error-text">Limit reached! Your text exceeds {options.limitValue} characters.</p>

        </article>
    )
}