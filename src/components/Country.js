import React from 'react'
import Weather from './Weather'

const Country = ({one}) => {
  return(
    <div>
      <h1>{one.name} </h1>
            <p>capitol: {one.capital}</p>
            <p>population: {one.population}</p>
            <h1>languages</h1>
            <ul>
                {one.languages.map( (each, i) =>
                    <li key = {i}>
                        {each.name}
                    </li>
                )}
            </ul>
            <img src = {one.flag} height = "100" alt = 'flag' />
      <Weather one = {one}/>
    </div>
  )
}
    
    
   
    
    
   

export default Country
