import React from "react"


export default function StatisticsCount({ data, type }) {
    return (
        <article className={`counts__count ${type}`}>
            <p className="counts__count-name">{data.name}</p>
            <h3 className="counts__count-value">{data.value}</h3>
        </article>
    )
}