import './weather.css'
import { useEffect, useState } from 'react'
import History from '../History/history'

function Weather() {
    const [weather, setweather] = useState()
    const [city, setcity] = useState('')
    const [buttonClicked, setbuttonClicked] = useState(false)
    const [historyClick, sethistoryClick] = useState(false)
    const [history , sethistory] = useState([])


    useEffect(() => {
        if (buttonClicked === true) {
            fetchWeatherApi()
            setcity('')
        }
    }, [buttonClicked])



   const fetchWeatherApi = async () => {
    try{
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`)
      const weatherData = await response.json()
      setweather(weatherData)

      sethistory((prevHistory) => [...prevHistory, {Name: weatherData.name, Temp:weatherData.main.temp}])
    } catch (error){
        console.log('Error -->' , error)
    }
       setbuttonClicked(false)
    }


    return (
        <div className='container'>
        <div className="weather-div">
            <h1 className='heading'>Weather App</h1>
            <div className='input-div'>
                <input type='text' placeholder='Search City' onChange={(e) => setcity(e.target.value)} />
                <button className='search-btn' onClick={() => setbuttonClicked(true)}>Search</button>
            </div>
            {weather && <div className='weather-display'>
                <h3>Temperature: <span>{weather.main.temp} &#176;C</span></h3>
                <h3>City Name: <span>{weather.name} ({weather.sys.country})</span></h3>
                <h3>Weather: <span>{weather.weather[0].description}</span></h3>
                <button className='history-btn' onClick={()=>sethistoryClick(true)}>History</button>
            </div>}
            {historyClick && <History history={history}/>}
        </div>
        </div>
    )
}

export default Weather