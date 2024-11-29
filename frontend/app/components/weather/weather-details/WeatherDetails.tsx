import React from 'react';
import styles from './WeatherDetails.module.css';
interface WeatherDetailsProps {
  precipitation: string;
  humidity: string;
  windSpeed: string;
}

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  precipitation,
  humidity,
  windSpeed
}) => {
  return (
    <section className={styles.weatherDetails}>
      <div className={styles.detail}>
        <span className={styles.label}>precipitation</span>
        <span className={styles.value}>{precipitation}</span>
      </div>
      <div className={styles.detail}>
        <span className={styles.label}>humidity</span>
        <span className={styles.value}>{humidity}</span>
      </div>
      <div className={styles.detail}>
        <span className={styles.label}>wind</span>
        <span className={styles.value}>{windSpeed}</span>
      </div>
    </section>
  );
};