import GenericRowComponent from '@/app/components/generic-row'
import MainTempComponent from '@/app/components/main-temp'
import PeriodTempComponent from '@/app/components/period-temp'
import styles from './style.module.css'
import HeaderComponent from '@/app/components/header'
import weatherHttp from '@/app/configs/decorator'
import { WeatherApiResponse } from './type'
import { PeriodTemp, TCurrent, formatCurrentInfo, formatGeneralInfo, formatPeriodGroup } from './methods'
import { isGray } from '@/app/components/icon-render/equivalence'

type ComponentParams = {
  params: Promise<{ slug: string }>
}

const FooPage = async ({ params }: ComponentParams) => {
  const { slug } = await params

  const request = weatherHttp(slug)
  
  let theme = "blue-theme"

  let city = ""
  let timedayGroup: PeriodTemp[] = []

  let current: TCurrent = {
    condition: "",
    humidity: "",
    temperature: "",
    windKph: "",
    icon: null,
    code: ""
  } 

  let generalInfo = {
    sunset: "",
    sunrise: "",
    minTemperature: "",
    maxTemperature: ""
  }

  try {
    const response = await request
    const json: WeatherApiResponse = await response.json()

    const { location, current: rawCurrent, forecast: rawForecast } = json
    const { forecastday } = rawForecast ?? {}

    city = location?.name
    current = formatCurrentInfo(rawCurrent)
    generalInfo = formatGeneralInfo(forecastday?.[0] ?? null)

    timedayGroup = formatPeriodGroup(forecastday?.[0] ?? null)
  } catch (error) {
    console.log(error);
  }

  if (isGray.includes(current.code)) {
    theme = "gray-theme"
  }

  return (
    <>
      <div className={[styles.container, theme].join(" ")}>
        <HeaderComponent title={city} description={current.condition} icon={current.code} />
        <MainTempComponent degree={current.temperature} format={"ºC"} lastDegree={generalInfo.minTemperature} nextDegree={generalInfo.maxTemperature} />
        <div className={styles.timeDayGroup}>
          {timedayGroup.map((period, index) => <PeriodTempComponent degree={period.degree} code={period.code} timeDay={['Dawn', 'Morning', 'Afternoon', 'Night'][index]} key={period.timeDay + period.degree + index} />)}
        </div>
        <GenericRowComponent first={{ title: "Wind speed", value: current.windKph + " kph" }} second={{ title: "Sunrise", value: generalInfo.sunrise }} third={{ title: "Sunset", value: generalInfo.sunset }} forth={{ title: "Humidity", value: current.humidity + " %" }}/>
      </div>
    </>
  )}

export default FooPage;