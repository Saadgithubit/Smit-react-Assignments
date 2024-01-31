import { useState } from 'react'
import './dashboard.css'
import { useNavigate } from 'react-router-dom'

function Dashboard(){
   const navigate = useNavigate()

return(
    <div className="container">
    <div className='ineer'>
        <div>
        <h1>Weather App</h1>
        <h4>29 January 2024</h4>
        </div>
        <button className='start-btn' onClick={() => navigate('weather')}>Get Started</button>
    </div>
    </div>
)
}

export default Dashboard