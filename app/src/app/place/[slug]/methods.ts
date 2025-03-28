import type { WeatherDayInfo, WeatherCurrent, WeatherHourInfo } from "./type";

export type PeriodTemp = {
  degree: string;
  timeDay: string;
  code: string;
}

export const formatPeriodGroup = (rawData: WeatherDayInfo): PeriodTemp[] => {
  if (!rawData) return []

  const arr: PeriodTemp[] = []

  rawData.hour.map((hour: WeatherHourInfo) => {
    // yyyy-mm-dd/s
    const regex = /^\d{4}-\d{2}-\d{2}\s/;
    const actualHour = hour.time.replace(regex, "")
    
    switch (actualHour) {
      case "03:00":
        arr.push({ degree: hour.temp_c, timeDay: hour.condition.text, code: hour.condition.code })
        break;
      case "09:00":
        arr.push({ degree: hour.temp_c, timeDay: hour.condition.text, code: hour.condition.code })
        break;
      case "15:00":
        arr.push({ degree: hour.temp_c, timeDay: hour.condition.text, code: hour.condition.code })
        break;
      case "21:00":
        let code = hour.condition.code
        if (hour.condition.text.includes("Clear")) {
          code = "400"
        }
        if (hour.condition.text.includes("Partly cloudy")) {
          code = "401"
        }
        
        arr.push({ degree: hour.temp_c, timeDay: hour.condition.text, code })
        break;
      default:
        break;
    }
  })
  
  return [...arr]
}

export type TCurrent = {
  condition: string;
  humidity: string;
  temperature: string;
  windKph: string;
  icon: string | null;
  code: string;
}

export const formatCurrentInfo = (rawData: WeatherCurrent): TCurrent => {
  const icon = rawData?.condition?.text

  return {
    condition: rawData?.condition?.text || "",
    humidity: rawData?.humidity || "",
    temperature: rawData?.temp_c || "",
    windKph: rawData?.wind_kph || "",
    code: rawData?.condition?.code,
    icon
  } 
}

export type TGeneralInfo = {
  sunset: string,
  sunrise: string,
  minTemperature: string,
  maxTemperature: string
}

export const formatGeneralInfo = (rawData?: WeatherDayInfo): TGeneralInfo => {
  if (!rawData) return {
    sunset: "",
    sunrise: "",
    minTemperature: "",
    maxTemperature: ""
  }

  return {
    sunset: rawData?.astro?.sunset || "",
    sunrise: rawData?.astro?.sunrise || "",
    minTemperature: rawData?.day?.mintemp_c || "",
    maxTemperature: rawData?.day?.maxtemp_c || "",
  }
}
