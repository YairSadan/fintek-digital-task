export interface WeatherData {
  location: {
    name: string;
    country: string;
    localtime_epoch: number;
    lat: number;
    lon: number;
  };
  current: {
    temp_c: number;
    condition: string;
    precipitation: number;
    humidity: number;
    wind_kph: number;
    last_updated_epoch: number;
  };
  forecast: Array<{
    time: string;
    temp_c: number;
  }>;
}
