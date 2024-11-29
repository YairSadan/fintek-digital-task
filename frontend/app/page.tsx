import Side from "./components/side/side";
import WeatherCard from "./components/weather/weather";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Side />
      <WeatherCard />
    </div>
  );
}
