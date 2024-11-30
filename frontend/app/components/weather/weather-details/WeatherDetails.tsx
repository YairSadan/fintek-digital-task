import React from "react";
import styles from "./WeatherDetails.module.css";
interface WeatherDetailsProps {
  precipitation: number;
  humidity: number;
  windSpeed: number;
}

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  precipitation,
  humidity,
  windSpeed,
}) => {
  return (
    <section 
      className={styles.weatherDetails} 
      role="region" 
      aria-label="Weather conditions details"
    >
      <div className={styles.detail} aria-label="Precipitation information">
        <span className={styles.label}>precipitation</span>
        <span className={styles.value} aria-label={`${precipitation} millimeters`}>{precipitation} mm</span>
      </div>
      <div className={styles.detail} aria-label="Humidity information">
        <span className={styles.label}>humidity</span>
        <span className={styles.value} aria-label={`${humidity} percent`}>{humidity}%</span>
      </div>
      <div className={styles.detail} aria-label="Wind speed information">
        <span className={styles.label}>wind</span>
        <span className={styles.value} aria-label={`${windSpeed} kilometers per hour`}>{windSpeed} km/h</span>
      </div>
    </section>
  );
};
