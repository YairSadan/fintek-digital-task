import React from "react";
import styles from "./WeatherHeader.module.css";

interface WeatherHeaderProps {
  city: string;
  country: string;
  datetime_epoch: number;
}

export const WeatherHeader: React.FC<WeatherHeaderProps> = ({
  city,
  country,
  datetime_epoch,
}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.city}>{city}</h1>
      <p className={styles.country}>{country}</p>
      <p className={styles.timeAndDate}>
        {new Date(datetime_epoch * 1000).toLocaleString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </header>
  );
};
