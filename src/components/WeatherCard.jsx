import React from 'react'


export default function WeatherCard({max,min,date},props) {


  return (
    <>
        <div className='Card'>
            <h6>{date.toLocaleDateString('en-UK',{weekday : "long"})}</h6>
            <img src='https://www.svgrepo.com/show/407540/sun.svg'/>
            <p>{max ? max : null}</p>
            <p>{min ? min : null}</p>
        </div>
    </>
  )
}
