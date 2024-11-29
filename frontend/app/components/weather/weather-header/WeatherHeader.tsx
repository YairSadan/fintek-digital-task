import React from "react";
import styles from "./WeatherHeader.module.css";

interface WeatherHeaderProps {
  city: string;
  country: string;
  datetime: string;
}

export const WeatherHeader: React.FC<WeatherHeaderProps> = ({
  city,
  country,
  datetime,
}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.city}>{city}</h1>
      <p className={styles.country}>{country}</p>
      <p className={styles.timeAndDate}>{datetime}</p>
    </header>
  );
};
