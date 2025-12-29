import React from "react"


export default function StatisticsLetterDensity({ children }) {
    return (
        <section className="letter-density-section">
            <h2 className="ld__heading sub-heading">Letter Density</h2>
            {children}
        </section>
    )
}