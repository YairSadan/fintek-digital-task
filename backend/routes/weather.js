import express from "express";
const router = express.Router();

// Get weather data by city
// GET /api/weather/:city
router.get("/:city", async (req, res, next) => {
  try {
    const { city } = req.params;

    if (!isValidCity(city)) {
      const error = new Error("Please provide a valid city name");
      error.status = 400;
      return next(error);
    }

    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=1`
    );

    if (!response.ok) {
      const body = await response.json();
      if (response.status === 400 && body.error.code === 1006) {
        const error = new Error("City not found");
        error.status = 404;
        return next(error);
      }
      throw new Error(`Weather API error: ${response.statusText}`);
    }

    const weatherData = await response.json();

    const forecastData = transformWeatherData(weatherData);

    res.status(200).json(forecastData);
  } catch (error) {
    next(error);
  }
});

export default router;

const transformWeatherData = (weatherData) => {
  const localTime = new Date(weatherData.location.localtime);
  const currentHour = localTime.getHours();

  const hourlyForecast = weatherData.forecast.forecastday[0].hour;
  const currentHourIndex = hourlyForecast.findIndex(
    (hour) => new Date(hour.time).getHours() === currentHour
  );

  const nextFiveHours = hourlyForecast
    .slice(currentHourIndex + 1, currentHourIndex + 6)
    .map((hour) => ({
      time: `${new Date(hour.time).getHours()}:00`,
      temp_c: hour.temp_c.toFixed(0),
    }));

  return {
    location: {
      name: weatherData.location.name,
      country: weatherData.location.country,
      localtime_epoch: weatherData.location.localtime_epoch,
      lat: weatherData.location.lat.toFixed(2),
      lon: weatherData.location.lon.toFixed(2),
    },
    current: {
      temp_c: weatherData.current.temp_c.toFixed(0),
      condition: weatherData.current.condition.text.toLowerCase(),
      precipitation: weatherData.current.precip_mm,
      humidity: weatherData.current.humidity,
      wind_kph: weatherData.current.wind_kph.toFixed(0),
      last_updated_epoch: weatherData.current.last_updated_epoch,
    },
    forecast: nextFiveHours,
  };
};

const isValidCity = (city) => {
  return (
    city &&
    typeof city === "string" &&
    city.length >= 2 &&
    city.length <= 50 &&
    /^[a-zA-Z\s-]+$/.test(city)
  );
};
