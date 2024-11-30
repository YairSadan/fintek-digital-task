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
    <section className={styles.weatherDetails}>
      <div className={styles.detail}>
        <span className={styles.label}>precipitation</span>
        <span className={styles.value}>{precipitation} mm</span>
      </div>
      <div className={styles.detail}>
        <span className={styles.label}>humidity</span>
        <span className={styles.value}>{humidity}%</span>
      </div>
      <div className={styles.detail}>
        <span className={styles.label}>wind</span>
        <span className={styles.value}>{windSpeed} km/h</span>
      </div>
    </section>
  );
};
