import React from "react"


function Form(props){
  return(
<form onSubmit={props.onSubmit} >
   <div>
        Name: <input value={props.name} onChange={props.addName}/>
    </div>
    <p></p>
    <div>
      Number: <input value={props.number} onChange={props.addNumber}/>
    </div>
  
  <div>
    <button type="submit" style={{backgroundColor: "gray"}} >Add</button>
  </div>
  </form>
  )
}

export default Form