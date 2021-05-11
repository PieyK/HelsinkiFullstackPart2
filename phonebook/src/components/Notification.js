import React from "react"

function Notification({ifAdded}){
  const divStyle = {
    border: "3px solid green",
    borderRadius: 5,
    padding: 5,
    color: "green"
  }

 if(ifAdded === null){
   return null
 }
  return(
    <div style={divStyle} >
        {ifAdded}
  
    </div>
  )
}

export default Notification