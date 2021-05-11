import React from "react"

function Languages({country}){
  return(
    <>
      <h2>Spoken Languages:</h2>
        
     {country.languages.map(language => 
       <ul key={country.callingCodes++}><li key={country.demonym}>{language.name}</li></ul>
     )}
  
    </>
  )
}

export default Languages
