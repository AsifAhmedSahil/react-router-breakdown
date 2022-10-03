import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import"./countries.css"

const Countries = () => {
    const countries = useLoaderData()
    console.log(countries);
  return (
    <div >
        <h1>all countries: {countries.length}</h1>
        <div className='countries-container'>
        {
            countries.map(country =>
            <li key={country.cca3}>

                <Link  to={`/country/${country.name}`}><div className='country'>{country.name}</div></Link>
                
            </li>)
        }
        </div>
    </div>
  )
}

export default Countries