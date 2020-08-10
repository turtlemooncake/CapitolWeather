import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({one}) =>{
    const [weather, setWeather] = useState([])
    const myapi = process.env.REACT_APP_API_KEY
    const url = `http://api.weatherstack.com/current?access_key=${myapi}&query=${one.capital}`
    
    console.log(url)
    useEffect(() => {
      console.log('effect')
      axios
        .get(url)
        .then(response => {
          console.log('promise fulfilled')
          setWeather(response.data.current)
        })
    }, [])

    
    return(
       <div>
           <h1>Weather in {one.capital}</h1>
           <strong>Temperature:</strong> {weather.temperature} Celsius
           <div>
           <img src = {weather.weather_icons} width = '80' alt = 'weather icon' />
           </div>
           <strong>wind:</strong> {weather.wind_speed} km direction {weather.wind_dir}
           
       </div>
    )
}

export default Weather