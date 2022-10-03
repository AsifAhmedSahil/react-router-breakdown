import React from 'react'
import "./country.css"
import { useLoaderData } from 'react-router-dom'

const Country = () => {
    const country = useLoaderData()[0]
  return (
    <div className='container'>
        <h1>Informations</h1>
        <h1 >Country: {country.name}</h1>
        <img src={country.flags.png} alt="/" />
        <h3>Borders: {country.borders}</h3>
        <h4>Capital: {country.capital}</h4>
        <h5>Currencies: {country.currencies[0].code}</h5>
        <h5>Currencies-symbol: {country.currencies[0].symbol}</h5>
        <p>Population: {country.population}</p>
    </div>
    
  )
}

export default Country