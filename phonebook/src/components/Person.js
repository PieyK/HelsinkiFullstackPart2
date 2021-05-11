import React from "react"

function Person({person, handleClick}){
  return(
    
  <div>{person.name} {person.number}<button onClick={handleClick} style={{backgroundColor:"red"}}>delete</button></div>
  )
}

export default Person
