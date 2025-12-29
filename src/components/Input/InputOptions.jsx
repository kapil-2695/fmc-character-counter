import React from "react"
import { CounterContext } from "../../App"
import checkIcon from "../../assets/images/icon-check.svg"


export default function InputOptions() {
    const { options, setOptions, readingTime } = React.useContext(CounterContext)

    function handleChange(event) {
        if (event.target.type === "checkbox")
            setOptions(prev => ({ ...prev, [event.target.name]: event.target.checked }))
        else
            setOptions(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    return (
        <aside className="input__options-readtime">

            <label className="checkbox">
                <input
                    type="checkbox" name="excludeSpaces"
                    onChange={handleChange}
                    checked={options.excludeSpaces}
                />
                <figure className="indicator">
                    <img src={checkIcon} alt="tick" />
                </figure>
                Exclude Spaces
            </label>

            <div className="input__character-limit">
                <label className="checkbox">
                    <input
                        type="checkbox" name="characterLimit"
                        onChange={handleChange}
                        checked={options.characterLimit}
                    />
                    <figure className="indicator">
                        <img src={checkIcon} alt="tick" />
                    </figure>
                    Set Character Limit
                </label>

                {options.characterLimit &&
                    <input
                        className="input__character-limit-value" type="number" min="1" step="1" required
                        name="limitValue"
                        onChange={handleChange}
                        value={options.limitValue}
                    />
                }

            </div>

            <p className="input__readtime">Approx. reading time: <span>&lt;{readingTime}minute</span></p>

        </aside>
    )
}