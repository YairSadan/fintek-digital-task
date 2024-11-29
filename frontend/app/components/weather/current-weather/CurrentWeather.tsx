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
    <main className={styles.mainInfo}>
      <div className={styles.temperature}>
        {temperature}<span className={styles.celsiusBig}></span>
      </div>
      <div className={styles.weather}>{condition}</div>
    </main>
  );
};