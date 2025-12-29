import React from "react"
import Header from "./components/Header"
import Input from "./components/Input/index"
import Statistics from "./components/Statistics/index"
import { getSortedLetterDensity, getTextStatistics } from "./js/calculateWordMetrics"


const CounterContext = React.createContext()

const initialAppOptions = { excludeSpaces: true, characterLimit: false, limitValue: 100 }

const averageReadingSpeed = 200 // wpm


export default function App() {
    /* states */
    const [theme, setTheme] = React.useState(() => "dark")
    const [inputText, setInputText] = React.useState(() => "")
    const [options, setOptions] = React.useState(() => initialAppOptions)
    const [showAllLetters, setShowAllLetters] = React.useState(() => false)

    /* derived states */
    const wrapperClasses = `wrapper ${theme}`
    const limitError = options.characterLimit && (inputText.length >= options.limitValue)
    const counts = getTextStatistics(inputText, options.excludeSpaces)
    const readingTime = Math.ceil(counts.wordCount / averageReadingSpeed)
    const { density, letterCount } = getSortedLetterDensity(inputText)
    const densityMultiplier = letterCount ? letterCount / density[0][1] : 0

    /* functions */
    function toggleTheme() { setTheme(p => p === "light" ? "dark" : "light") }


    const data = {
        theme, toggleTheme, options, setOptions, inputText, setInputText,
        limitError, readingTime, showAllLetters, setShowAllLetters
    } // data for the context

    return (
        <CounterContext.Provider value={data}>
            <div className={wrapperClasses}>
                <div className="counter-container">

                    <Header />

                    <section className="title-section">
                        <h1 className="main-heading">Analyze your text in real-time.</h1>
                    </section>

                    <Input>
                        <Input.Textarea>{inputText}</Input.Textarea>
                        {limitError && <Input.Error />}
                        <Input.Options />
                    </Input>

                    <Statistics>
                        <Statistics.Metrics>
                            <Statistics.Count type="total" data={{
                                name: "Total Characters",
                                value: counts.totalCharacters
                            }} />
                            <Statistics.Count type="word" data={{
                                name: "Word Count",
                                value: counts.wordCount
                            }} />
                            <Statistics.Count type="sentence" data={{
                                name: "Sentence Count",
                                value: counts.sentenceCount
                            }} />
                        </Statistics.Metrics>

                        <Statistics.LetterDensity>
                            {letterCount > 0
                                ? <>
                                    <section className={`ld__data ${showAllLetters && "show-all"}`}>
                                        {
                                            density.map(letter => {
                                                return (
                                                    <Statistics.LetterInfo data={{
                                                        name: letter[0],
                                                        percentFilled: letter[1] * 100 / letterCount,
                                                        count: letter[1],
                                                        densityMultiplier
                                                    }} key={letter[0]} />
                                                )
                                            })
                                        }
                                    </section>
                                    {letterCount > 5 && <Statistics.ShowMoreButton />}
                                </>

                                : <p className="ld__no-letters-found">
                                    No characters found. Start typing to see letter density.
                                </p>
                            }
                        </Statistics.LetterDensity>
                    </Statistics>

                </div>  {/* end of counter-container*/}

            </div>  {/* end of wrapper*/}

        </CounterContext.Provider>
    )
}

export { CounterContext }