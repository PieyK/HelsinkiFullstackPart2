import { React, useState, useEffect } from "react"
import Countries from "./components/Countries"
import Country from "./components/Country"
import Capital from "./components/Capital"
import Population from "./components/Population"
import Flag from "./components/Flag"
import Languages from "./components/Languages"
import WeatherIn from "./components/WeatherIn"
import Weather from "./components/Weather"
import axios from "axios"


function App() {
  const [countries, setCountries] = useState([]);
  const [oneCountry, setOneCountry] = useState([]);
  const [tenCountries, setTenCountries] = useState([]);
  const [weather, setWeather] = useState({});
  //console.log(weather);
  const [country, setCountry] = useState([]);
  
  
  useEffect(() =>{
    axios
    .get("https://restcountries.eu/rest/v2/all")
    .then(response =>
      setCountries(response.data)
      )
    }, [])

    useEffect(() =>{
      const params = {
        access_key: process.env.REACT_APP_API_KEY,
        //query: country.map(country => country.name).toString()
      }
     axios
      .get("http://api.weatherstack.com/current?", {params})
      .then(response => 
        setWeather(response.data)
        )
    }, [])
    

  function filterCountries(e){
  const input = e.target.value.toLowerCase();
    
    const filtered = countries.filter(country => country.name.toLowerCase().includes(input));
    setCountries(filtered);
    
    if(countries.length > 10){
      alert("Too many matches, narrow down the filter");
    }
    if(countries.length <= 10){
      setTenCountries(countries)
    }
    if(countries.length === 1){
      setOneCountry(countries)
      setTenCountries([])
      setCountry(countries)
    }
  }

  function refreshPage(){
    window.location.reload();
    setCountries(countries)
  }

  function aboutCountry(){
    
  }
  
  return (
    <>
      <h2>COUNTRIES OF THE WORLD</h2>
      <input placeholder="search a country" onChange={filterCountries}/>
      <button onClick={refreshPage}>Refresh</button>

      {oneCountry.map(country => country.name)}
      {tenCountries.map(country =>
        <Countries key={country.name} country={country} handleClick={aboutCountry}/>
        )}
      {oneCountry.map(country =>
        <Country key={country.name} country={country} />
        )}
      {oneCountry.map(country => 
        <Capital key={country.capital} country={country} />
      )}
      {oneCountry.map(country => 
        <Population key={country.population} country={country}/>
      )}
      {oneCountry.map(country =>
        <Languages key={country.name}  country={country}/>
        )} 
      {oneCountry.map(country => 
        <Flag key={country.flag} country={country}/>,
        )}
        
      {oneCountry.map(country => 
        <WeatherIn key={country.name} country={country} />
         )}
      {country.map(country =>
        <Weather key={country.name} weather={weather}/>
        )}
    </>
  );
}

export default App;
