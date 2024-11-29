import React from 'react';
import styles from './HourlyForecast.module.css'

interface HourlyForecastItem {
  hour: string;
  temperature: number;
}

interface HourForecastProps {
  hour: string;
  temperature: number;
}

const HourForecast: React.FC<HourForecastProps> = ({ hour, temperature }) => (
  <div className={styles.hourContainer}>
    <div className={styles.hour}>{hour}</div>
    <div className={styles.hourTemp}>
      {temperature}<span className={styles.celsiusSmall}/>
    </div>
  </div>
);

interface HourlyForecastProps {
  forecasts: HourlyForecastItem[];
}

export const HourlyForecast: React.FC<HourlyForecastProps> = ({ forecasts }) => {
  return (
    <footer className={styles.hourlyForecast}>
      {forecasts.map((forecast, index) => (
        <HourForecast
          key={index}
          hour={forecast.hour}
          temperature={forecast.temperature}
        />
      ))}
    </footer>
  );
};