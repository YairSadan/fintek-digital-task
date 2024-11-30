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
    <header 
      className={styles.header} 
      role="banner" 
      aria-label="Weather information for location"
    >
      <h1 className={styles.city} aria-live="polite">{city}</h1>
      <p className={styles.country} aria-label={`Country: ${country}`}>{country}</p>
      <p 
        className={styles.timeAndDate} 
        aria-label={`Weather data from: ${new Date(datetime_epoch * 1000).toLocaleString("en-GB")}`}
      >
        {new Date(datetime_epoch * 1000).toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
        {" at "}
        {new Date(datetime_epoch * 1000).toLocaleString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </header>
  );
};
