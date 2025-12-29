import React from "react"
import dropDownIcon from "../../assets/images/icon-dropdown.svg"
import dropUpIcon from "../../assets/images/icon-dropup.svg"
import { CounterContext } from "../../App"


export default function ShowMoreButton() {
    const { showAllLetters, setShowAllLetters } = React.useContext(CounterContext)
    const buttonDetails = showAllLetters
        ? { location: dropUpIcon, alt: "dropup icon", label: "See less" }
        : { location: dropDownIcon, alt: "dropdown icon", label: "See more" }

    return (
        <button className="ld__show-more-btn" onClick={() => setShowAllLetters(p => !p)}>
            {buttonDetails.label}
            <img src={buttonDetails.location} alt={buttonDetails.alt} />
        </button>
    )
}