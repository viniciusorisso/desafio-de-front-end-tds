import Image from 'next/image';
import styles from './style.module.css'
import ArrowUp from "@/app/assets/icons/stash_arrow-up-light.svg"
import ArrowDown from "@/app/assets/icons/stash_arrow-down-light.svg"

type ComponentProps = {
  degree: string;
  format: string;
  lastDegree: string;
  nextDegree: string;
}

const MainTempComponent = ({ degree, format, lastDegree, nextDegree }: ComponentProps) => {
  return (
    <>  
      <div className={styles.box}>
        <span className={styles.degree}>
          {degree}
        </span>
        <div>
          <span className={styles.format}>
            {format}
          </span>
          <div className={styles.changes}>
            <span className={styles.degree}>
              <Image className={styles.icon} src={ArrowUp} alt="arrow up icon" /> 
              <p>{lastDegree} º</p>
            </span>
            <span className={styles.degree}>
              <Image className={styles.icon} src={ArrowDown} alt="arrow down icon" />
              <p>{nextDegree} º</p>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainTempComponent;