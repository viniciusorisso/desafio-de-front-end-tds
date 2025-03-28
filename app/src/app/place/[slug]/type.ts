type WeatherLocation = {
  name: string;
  localtime: string;
}

export type WeatherCurrent = {
  temp_c: string;
  temp_f: string;
  condition: {
    text: string;
    code: string;
  };
  wind_mph: string;
  wind_kph: string;
  humidity: string;
}

export type WeatherHourInfo = {
  temp_c: string;
  temp_f: string;
  condition: {
    text: string;
    code: string;
  };
  time: string;
}

export type WeatherHourDay = {
  maxtemp_c: string;
  maxtemp_f: string;
  mintemp_c: string;
  mintemp_f: string;
  condition: {
    text: string;
  };
}
export type WeatherDayInfo = {
  day: WeatherHourDay;
  astro: {
    sunrise: string;
    sunset: string;
  };
  hour: WeatherHourInfo[]
}

export type WeatherApiResponse = {
  location: WeatherLocation;
  current: WeatherCurrent;
  forecast: {
    forecastday: WeatherDayInfo[]
  }
}