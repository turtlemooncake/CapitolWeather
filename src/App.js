import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log(countries)

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h1>
        Current Weather Report For Country Capitals 
      </h1>
      <div>
        <Filter country = {countries} fil = {filter} handle = {handleFilterChange} buttonFilter = {setFilter}/>
      </div>
    </div>
  )
}

export default App;
