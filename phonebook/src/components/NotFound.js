import React from "react"

function NotFound({message, ifDeleted}){
  const divStyle = {
    border: "3px solid red",
    borderRadius: 5,
    padding: 5,
    color: "red"
  }

  if(message === null || ifDeleted === null){
    return null
  }
  return(
    <div style={divStyle}>
      {message}
      {ifDeleted}
    </div>
  )
}

export default NotFound