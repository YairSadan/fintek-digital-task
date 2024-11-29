import React from "react";
import styles from "./weather.module.css";
import { WeatherHeader } from "./weather-header/WeatherHeader";
import { CurrentWeather } from "./current-weather/CurrentWeather";
import { HourlyForecast } from "./hourly-forecast/HourlyForecast";
import { WeatherDetails } from "./weather-details/WeatherDetails";

const WeatherCard = () => {
  const forecasts = [
    { hour: '13:00', temperature: 18 },
    { hour: '14:00', temperature: 19 },
    { hour: '15:00', temperature: 20 },
    { hour: '16:00', temperature: 19 },
    { hour: '17:00', temperature: 18 },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <WeatherHeader 
          city="Tel Aviv"
          country="Israel"
          datetime="13/2/22 at 16:00"
        />
        <CurrentWeather 
          temperature={18}
          condition="sunny"
        />
        <WeatherDetails 
          precipitation="0 mm"
          humidity="53%"
          windSpeed="28 km/h"
        />
        <HourlyForecast forecasts={forecasts}/>
      </div>
    </div>
  );
};

export default WeatherCard;