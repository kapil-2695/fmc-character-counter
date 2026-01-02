import React from "react"


export default function Statistics({ children }) {
    return (
        <section className="cc__statistics">
            <h1 className="sr-only">Text Statistics Section</h1>
            {children}
        </section>
    )
}