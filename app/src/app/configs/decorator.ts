import httpAdapter from "./http";

const weatherHttp = (place: string) => {
  const now = new Date().toISOString()
  const urlBase = new URL("http://api.weatherapi.com/v1/forecast.json")
  urlBase.searchParams.append("key", process.env.WEATHER_API || "")
  urlBase.searchParams.append("q", place)
  urlBase.searchParams.append("dt", now.slice(0,10))
  
  return httpAdapter({ url: urlBase })
};

export default weatherHttp;