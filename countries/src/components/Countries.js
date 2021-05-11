import React from "react"

function Countries({country, handleClick}){
  return(
    <div>{country.name}{<button onClick={handleClick}>show</button>}</div>
  )
}

export default Countries