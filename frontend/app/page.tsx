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
    <main className={styles.container} role="main" aria-label="Weather Application">
      <div className={styles.logo} role="banner" aria-label="Application Logo">
        <Logo />
      </div>
      <Side setWeatherData={setWeatherData} />
      {weatherData && <WeatherCard data={weatherData} />}
    </main>
  );
}
