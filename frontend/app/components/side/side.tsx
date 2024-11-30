"use client";
import React, { useState } from "react";
import styles from "./side.module.css";
import Logo from "../logo";
import { WeatherData } from "@/app/types";
interface SideProps {
  setWeatherData: (data: WeatherData) => void;
}

const Side = ({ setWeatherData }: SideProps) => {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState<WeatherData["location"] | null>(null);
  const [lastUpdated, setLastUpdated] = useState<number | null>(null);

  const handleSearch = async () => {
    const response = await fetch(`http://localhost:8000/api/weather/${city}`);
    const data: WeatherData = await response.json();
    setWeatherData(data);
    setLocation(data.location);
    setLastUpdated(data.current.last_updated_epoch);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.prompt}>
        Use our weather app to see the weather around the world
      </div>
      <div className={styles.title}>City name</div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Tel aviv"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Check
        </button>
      </div>
      {location && lastUpdated && (
        <div className={styles.footer}>
          <span>latitude {location.lat}</span>{" "}
          <span style={{ marginLeft: "20px" }}>
            longitude {location.lon}
          </span>
          <br />
          <span>
            accurate to {""}
            {new Date(lastUpdated * 1000).toLocaleString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
            {" at "}
            {new Date(lastUpdated * 1000).toLocaleString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      )}
    </aside>
  );
};
export default Side;
