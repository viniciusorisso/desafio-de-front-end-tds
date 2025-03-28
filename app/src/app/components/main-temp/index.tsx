import styles from './style.module.css'
import ArrowUp from "@/app/assets/icons/stash_arrow-up-light.tsx"
import ArrowDown from "@/app/assets/icons/stash_arrow-down-light.tsx"

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
              <div className={styles.icon}>
                <ArrowUp /> 
              </div>
              <p>{lastDegree} º</p>
            </span>
            <span className={styles.degree}>
              <div className={styles.icon}>
                <ArrowDown/>
              </div>
              <p>{nextDegree} º</p>
            </span>
          </div>
        </div>
      </div>
    </>
  )}

export default MainTempComponent;