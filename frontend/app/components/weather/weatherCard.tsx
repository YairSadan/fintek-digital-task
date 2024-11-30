import React from "react";
import styles from "./weather.module.css";
import { WeatherHeader } from "./weather-header/WeatherHeader";
import { CurrentWeather } from "./current-weather/CurrentWeather";
import { HourlyForecast } from "./hourly-forecast/HourlyForecast";
import { WeatherDetails } from "./weather-details/WeatherDetails";
import { WeatherData } from "@/app/types";
interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard = ({ data }: WeatherCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <WeatherHeader
          city={data.location.name}
          country={data.location.country}
          datetime_epoch={data.location.localtime_epoch}
        />
        <CurrentWeather
          temperature={data.current.temp_c}
          condition={data.current.condition}
        />
        <WeatherDetails
          precipitation={data.current.precipitation}
          humidity={data.current.humidity}
          windSpeed={data.current.wind_kph}
        />
        <HourlyForecast
          forecasts={data.forecast.map((f) => ({
            hour: f.time,
            temperature: f.temp_c,
          }))}
        />
      </div>
    </div>
  );
};

export default WeatherCard;