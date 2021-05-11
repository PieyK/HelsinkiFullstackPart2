import React from "react"

function Flag({country}){
  return(
    <>
      <img alt="flag" src={country.flag} width="200px" height="150px"/>
    </>
  )
}

export default Flag
