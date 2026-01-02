import React from "react"


export default function Input({ children }) {
    return (
        <section className="input-section">
            <h1 className="sub-heading sr-only">Input section</h1>
            {children}
        </section>
    )
}