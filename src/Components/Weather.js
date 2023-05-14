import React, { useState } from 'react'
import './Weather.css'
import axios from 'axios'

const Weather = () => {
    const timezoneOffset = (new Date()).getTimezoneOffset();

console.log(timezoneOffset);
    const showDate = new Date();
    const displaytodaydate=showDate.getDate()+<br/>+(showDate.getMonth()+1)+<br/>+showDate.getFullYear();
    const dlt=showDate.toDateString();
    // console.log(dlt+"ars");
    const [data, setData] = useState({})
    const [location, setlocation] = useState('')
    const Api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2549f404312b4f7d82d444094013a622`
    const searchLocation = (event) => {

        if (event.key === 'Enter') {
            axios.get(Api).then((response) => {
                setData(response.data)
                console.log(response.data)
            })

        }

    }
    return (
        <div className='app'>
        
            <div className='container'>
            <div >
                    <input type='text' placeholder='City Name' className='locationinput' value={location}
                        onChange={event => setlocation(event.target.value)}
                        onKeyPress={searchLocation}
                    />
                </div>
                
                <div className='location'>
                    {data.main ? <h3>{data.name},{data.sys.country}</h3> : ""}
                </div>
                <div className='temperature'>
                    {data.main ? <h3>{Math.trunc(data.main.temp / 10)}<span className='degree'>°C</span></h3> : ""}
                    <div className='description'>
                    {data.weather ? <h3 className='btext'>{data.weather[0].description}</h3> : ""}
                </div>
                    {data.main ? <h3 className='date'>{dlt}</h3>:""}
                </div>
                
                <div className='bottom'>
                <div className='feels-like'>
                    {data.main ? <h3 className='btext'>{Math.trunc(data.main.feels_like/10)}°C</h3> : ""}
                    <h3>Feels Like</h3>
                </div>

                <div className='humidity'>
                    {data.main ? <h3 className='btext'>{data.main.humidity} %</h3> : ""}
                    <h3>Humidity</h3>
                    
                </div>
                <div className='windspeed'>
                    {data.main ? <h3 className='btext'>{Math.trunc(data.wind.speed * 1.6)} km/h</h3> : ""}
                    <h3>Wind Speed</h3>
                </div>
                </div>
            </div>
        </div>


    )
}

export default Weather