import React from 'react';
import styles from './CurrentWeather.module.css';

interface CurrentWeatherProps {
  temperature: number;
  condition: string;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  temperature,
  condition
}) => {
  return (
    <div className={styles.mainInfo} role="region" aria-label="Current weather information">
      <div className={styles.temperature} aria-label={`Temperature is ${temperature} degrees celsius`}>
        {temperature}<span className={styles.celsiusBig} aria-hidden="true"></span>
      </div>
      <div className={styles.weather} role="status" aria-label={`Weather condition is ${condition}`}>
        {condition}
      </div>
    </div>
  );
};