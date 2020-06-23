import React from "react"
import ReactDOM from "react-dom"

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p> So you were brobally born {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const nimi = "Pekka"
  const ika = 10

  return (
    <>
      <div>
        <h1>Hello</h1>
        <Hello name={"Maya"} age={15} />
        <Hello name={nimi} age={ika} />
      </div>
    </>
  )
}
ReactDOM.render(<App />, document.getElementById("root"))
