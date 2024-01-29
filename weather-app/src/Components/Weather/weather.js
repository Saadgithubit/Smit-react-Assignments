import './weather.css'
import { useEffect,useState } from 'react'

function Weather(){
    const [weather,setweather] = useState()
    const [inputText,setinputText] = useState()
   useEffect(()=>{
    fetchWeatherApi()
   },[inputText])
     
       function fetchWeatherApi(){
         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`)
         .then(res => res.json())
         .then(res =>setweather(res))
         console.log(weather);
       }

       function inputField(event){
        const input = event.target.value
        setinputText(input)
       }
       
    return (
        <div className="weather-div">
            <div>
        <input type='text' placeholder='Search City' onChange={inputField}/>
        <button className='search-btn' onClick={fetchWeatherApi}>Search</button>
        </div>
        <div>
            <h3>{inputText}</h3>
        </div>
        </div>

    )
}

export default Weather