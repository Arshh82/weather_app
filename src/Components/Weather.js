import React from 'react'
import './Weather.css'

const Weather = () => {
    // let Api = `https://api.openweathermap.org/data/2.5/weather?q=indore&appid=2549f404312b4f7d82d444094013a622`
  return (
      <div className='app'>
      <div className='container'>
          <div >
              <input type='text' placeholder='Enter City Name' className='locationinput' />
          </div>
          <div className='location'>
              <h3>INDORE</h3>
          </div>
          <div className='date'>
              <h3>14-05-2023</h3>
          </div>
          <div className='temperature'>
              <h3>45`c</h3>
          </div>
          <div className='humidity'>
              <h3>30</h3>
          </div>
          <div className='windspeed'>
              <h3>45 Mp/h</h3>
          </div>
          </div>
      </div>
      

  )
}

export default Weather