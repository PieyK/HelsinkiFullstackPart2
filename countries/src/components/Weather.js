import React from "react"

function Weather({weather}){
  return(
    <>
    <h4 style={{display: "inline"}}>Local Time: </h4>{weather.location && weather.location.localtime}<p></p>
    <div>
    <h4 style={{display: "inline"}}>Temperature: </h4>{weather.current && weather.current.temperature + "°Celcius"}
    <p>{weather.current && weather.current.weather_descriptions}</p>
    <img alt="weather" src={weather.current && weather.current.weather_icons} /><p></p>
    <h4 style={{display: "inline"}}>Wind: </h4>{weather.current && weather.current.wind_speed +  " mph direction "} {weather.current && weather.current.wind_dir}
    </div>
    </>
  )
}

export default Weather