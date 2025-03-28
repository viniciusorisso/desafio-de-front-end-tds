import styles from './period-temp.module.css'
import IconRenderComponent from '../icon-render';

type ComponentProps = {
  degree: string;
  timeDay: string;
  code: string;
}

const PeriodTempComponent = ({ degree, timeDay, code }: ComponentProps) => {
  return (
    <>
      <div className={styles.box}>
        <p className={styles.title}>{ timeDay }</p>
        <div className={styles.icon}>
          <IconRenderComponent code={code} description={timeDay + " icon"} />
        </div>
        <p className={styles.degree}>{ degree }ºC</p>
      </div>
    </>
  )
}

export default PeriodTempComponent;