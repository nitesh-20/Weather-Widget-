import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
            city:"Raipur",
            feelsLike: 42.01,
            humidity: 27,
            temp: 40.08,
            tempMax: 40.08,
            tempMin: 40.08,
            weather: "haze",
    })
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Nitesh</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}