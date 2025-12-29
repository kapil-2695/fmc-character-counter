import React from "react"


export default function Input({ children }) {
    return (
        <section className="input-section">
            <h2 className="sub-heading sr-only">Input section</h2>
            {children}
        </section>
    )
}