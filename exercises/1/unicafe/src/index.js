import React, { useState } from "react"
import ReactDOM from "react-dom"

const StatisticsLine = (props) => {
  return (
    <div>
      {props.name} {props.value} {props.addon} <br />
    </div>
  )
}

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad > 0) {
    return (
      <div>
        <StatisticsLine name={"good"} value={props.good} />
        <StatisticsLine name={"neutral"} value={props.neutral} />
        <StatisticsLine name={"bad"} value={props.bad} />
        <StatisticsLine
          name={"all"}
          value={props.good + props.neutral + props.bad}
        />
        <StatisticsLine
          name={"average"}
          value={
            (props.good - props.bad) / (props.good + props.neutral + props.bad)
          }
        />
        <StatisticsLine
          name={"positive"}
          value={(props.good / (props.good + props.neutral + props.bad)) * 100}
          addon={"%"}
        />
      </div>
    )
  } else return <div>No feedback given</div>
}

const StatisticsButton = (props) => {
  return (
    <>
      <button
        onClick={() => {
          props.setter(props.value + 1)
        }}
      >
        {props.name}
      </button>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> Give feedback </h1>
      <StatisticsButton setter={setGood} value={good} name="good" />
      <StatisticsButton setter={setNeutral} value={neutral} name="neutral" />
      <StatisticsButton setter={setBad} value={bad} name="bad" />
      <h1> Statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
