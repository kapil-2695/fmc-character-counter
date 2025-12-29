import React from "react"
import { CounterContext } from "../../App"


export default function InputTextarea({ children }) {
    const { setInputText, limitError, options } = React.useContext(CounterContext)
    const textareaRef = React.useRef(null)

    function handleChange(event) {
        if (limitError) setInputText(event.target.value.slice(0, options.limitValue))
        else setInputText(event.target.value)
    }

    function handleClick() {
        textareaRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    return (
        <textarea className={`input__textarea ${limitError && "error"}`}
            placeholder="Start typing here… (or paste your text)"
            onChange={handleChange} value={children}
            ref={textareaRef} onClick={handleClick}
        >
        </textarea>
    )
}