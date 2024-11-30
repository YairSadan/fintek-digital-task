"use client";
import { useState } from "react";
import Side from "./components/side/side";
import WeatherCard from "./components/weather/weatherCard";
import styles from "./page.module.css";
import { WeatherData } from "./types";
import Logo from "./components/logo";

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
        <Logo />
      </div>
      <Side setWeatherData={setWeatherData} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}
