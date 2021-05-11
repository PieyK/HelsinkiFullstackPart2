import React from "react"

function Footer(){
    const footerStyle = {
      color: "gray",
      fontSize: 16
    }

    return(
      <div style={footerStyle}>
        <br />
        <em>Phonebook App, Department of CS, University of Helsinki 2021 </em>
      </div>
    )
  }

  export default Footer