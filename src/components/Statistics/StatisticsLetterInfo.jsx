import React from "react"


export default function StatisticsLetterInfo({ data }) {
    const indicatorStyles = { width: `${(data.percentFilled * data.densityMultiplier).toFixed(2)}%` }

    return (
        <article className="ld__letter-data">
            <p className="ld__letter-name">{data.name}</p>
            <div className="ld__indicator">
                <div className="ld__indicator-fill" style={indicatorStyles}></div>
            </div>
            <p className="ld__letter-value">
                <span>{data.count} </span>
                (<span>{data.percentFilled.toFixed(2)}</span>%)
            </p>
        </article>
    )
}