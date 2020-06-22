import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.partName} {props.partAmountExc}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part partName={props.name1} partAmountExc={props.amount1} />
      <Part partName={props.name2} partAmountExc={props.amount2} />
      <Part partName={props.name3} partAmountExc={props.amount3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>{props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name: "State of a component",
    exercises: 14
  }


  return (
    <div>
      <p>
        <Header course={course} />
        <Content name1={part1.name} amount1={part1.exercises} name2={part2.name} amount2={part2.exercises} 
        name3={part3.name} amount3={part3.exercises} />
        <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));