import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({loaded: false});
   
  function handleResponse (response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date:"Wednesday 07:00",
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name
    });
  }

    if (weatherData.loaded){
      return (
        <div className="Weather">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="Search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="d-flex">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="float-left"
                />
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else{  
      const apiKey = "a867e25f2d83db579421a57fd8e937ec";
      let units = "metric";
      let city = "New York";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(handleResponse);
      
      return "loading....";
    }
     
   }

