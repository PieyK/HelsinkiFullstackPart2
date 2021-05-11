import React from "react"

const Header = ({ courses }) => {
  return (
    <h2>{courses[0].name}</h2>
  )
}

const Header2 = ({ courses }) => {
  return (
    <h2>{courses[1].name}</h2>
  )
}

const Total = ({ courses }) => {
  const exercises = [courses[0].parts[0].exercises, courses[0].parts[1].exercises, courses[0].parts[2].exercises];

  
  function reducer(currentVal, nextVal){
    return currentVal + nextVal;
  }
  
  const sum = exercises.reduce(reducer, 0)
  
  return(
    <p><b>Total number of exercises is {sum}</b></p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Part2 = (props) =>{
  return (
    <p>
      {props.part.name} {props.part.exercises} 
    </p>    
  )
}

const Total2 = ({courses}) =>{
  const exercises = [courses[1].parts[0].exercises, courses[1].parts[1].exercises];

  function reducer(currentVal, nextVal){
    return currentVal + nextVal;
  }

  const total = exercises.reduce(reducer, 0);
  return(
    <p><b>Total  of {total} exercises</b></p>
  )
}

const Content2 = ({courses}) =>{
  return(
    <>
    <Header2 courses={courses}/>
    <Part2 part={courses[1].parts[0]}/>
    <Part2 part={courses[1].parts[1]}/>
    <Total2 courses={courses}/>
    </>
  )
}
const Content = ({ courses }) => {
  return (
    <div>
      <Part part={courses[0].parts[0]} />
      <Part part={courses[0].parts[1]} />
      <Part part={courses[0].parts[2]} />
      <Part part={courses[0].parts[3]}/>
    </div>
  )
}

const Course = ({courses}) =>{
  return(
    <>
    <h1>Web Development Curriculum</h1>
    <Header courses={courses}/>
    <Content courses={courses} />
    <Total courses={courses}/>
    <Content2 courses={courses}/>
    </>
  )
}

export default Course