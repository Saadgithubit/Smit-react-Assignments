import './weather.css'
import { useEffect,useState } from 'react'

function Weather(){
    const [inputText,setinputText] = useState()
   
     
       function fetchWeatherApi(){
         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`)
         .then(res => res.json())
         .then(res =>console.log(res))
       }

       function inputField(event){
        const input = event.target.value
        console.log(event);
        setinputText(input)
        console.log(inputText);
       }
    return (
        <div className="weather-div">
        <input type='text' onChange={inputField}/>
        <button className='search-btn' onClick={fetchWeatherApi}>Search</button>
        </div>
    )
}

export default Weather