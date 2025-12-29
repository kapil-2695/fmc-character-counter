import React from "react"


export default function StatisticsMetrics({ children }) {
  return (
    <section className="counts-section">

      <h2 className="sub-heading sr-only">Text, letter, words, sentence counts section</h2>

      {children}

    </section>
  )
}