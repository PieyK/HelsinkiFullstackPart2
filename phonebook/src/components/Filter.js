import React from "react"

function Filter({filter, filterContacts, handleClick}){
  return(
    <>
      Filter: <input placeholder= "search a contact" value={filter} onChange={filterContacts}/>
       <button onClick={handleClick}>Refresh Page</button>
    </>
  )
}

export default Filter