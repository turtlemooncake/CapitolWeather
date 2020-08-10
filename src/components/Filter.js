import Country from './Country'
import React from 'react'

const FilterProcess = ({territory, spec, buttonfil}) => {

    let filtered = territory
    if (spec){
      filtered = territory.filter( (each) => {
        return each.name.toLowerCase().includes(spec.toLowerCase())
      })
    }

    if (filtered.length > 10 && spec !== ''){
        return(
            <p>Too many matches, specify another filter</p>
        )
    }
    if (filtered.length === 1){
        return(
            <Country one = {filtered[0]}/>
        )
    }

    const rows = () => (
        filtered.map( (each) => 
            <li key = {each.name}>
                {each.name} 
                <button onClick = {() => buttonfil(each.name)}>
                    show
                </button>
            </li>
        )
    )

    return(
        rows()
    )
}

const Filter = ({country, fil, handle, buttonFilter}) => {
    return(
    <div>
        find countries {<input
          value = {fil}
          onChange = {handle}
        />}
        <FilterProcess territory = {country} spec = {fil} buttonfil = {buttonFilter}/>
    </div> 
    )
}
   

export default Filter