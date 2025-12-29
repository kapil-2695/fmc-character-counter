import React from "react"
import darkThemeLogo from "../assets/images/logo-dark-theme.svg"
import lightThemeLogo from "../assets/images/logo-light-theme.svg"
import sunIcon from "../assets/images/icon-sun.svg"
import moonIcon from "../assets/images/icon-moon.svg"
import { CounterContext } from "../App"


export default function Header() {
    const { theme, toggleTheme } = React.useContext(CounterContext)

    const logo = theme === "light" ? lightThemeLogo : darkThemeLogo
    const themeButtonImage = theme === "light"
        ? { location: moonIcon, alt: "moon" }
        : { location: sunIcon, alt: "sun" }


    return (
        <header className="cc__header">
            <figure className="header__logo">
                <img src={logo} alt="character counter logo" />
            </figure>
            <button className="theme-switcher-btn" onClick={toggleTheme}>
                <img src={themeButtonImage.location} alt={themeButtonImage.alt} />
            </button>
        </header>
    )
}