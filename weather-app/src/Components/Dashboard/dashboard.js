import { useState } from 'react'
import './dashboard.css'
import Weather from '../Weather/weather'

function Dashboard(props){
    const {toggle} = props
  const weather = true

return(
    <div className="main">
    <div className='ineer'>
        <div>
        <h1>Weather App</h1>
        <h4>29 January 2024</h4>
        </div>
        <button className='start-btn' onClick={() => toggle(weather)}>Get Started</button>
    </div>
    </div>
)
}

export default Dashboard