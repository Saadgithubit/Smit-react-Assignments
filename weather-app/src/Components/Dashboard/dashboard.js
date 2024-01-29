import { useState } from 'react'
import './dashboard.css'
import Weather from '../Weather/weather'

function Dashboard({data}){
//     const [data,setdata] = useState()
// function toggle(){
//     data = true
//     return data
// }
return(
    <div className="main">
    <div className='ineer'>
        <div>
        <h1>Weather App</h1>
        <h4>29 January 2024</h4>
        </div>
        <button className='start-btn' onClick={()=> data = true}>Get Started</button>
    </div>
    </div>
)
}

export default Dashboard