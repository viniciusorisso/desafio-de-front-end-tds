import styles from './generic-row.module.css'

type BoxRow = {
  title: string;
  value: string;
}

type ComponentProps = {
  first: BoxRow; 
  second: BoxRow;
  third: BoxRow; 
  forth: BoxRow;
}

const GenericRowComponent = ({ first, second, third, forth }: ComponentProps) => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.group}>
          <div className={styles.side}>
            <span className={styles.row}>{first.title}</span>
            <span className={styles.row}>{first.value}</span>
          </div>
          <span className={styles.divider}></span>
          <div className={styles.side}>
            <span className={styles.row}>{second.title}</span>
            <span className={styles.row}>{second.value}</span>
          </div>
        </div>
        <span className={styles.divider}></span>
        <div className={styles.group}>
          <div className={styles.side}>
            <span className={styles.row}>{third.title}</span>
            <span className={styles.row}>{third.value}</span>
          </div>
          <span className={styles.divider}></span>
          <div className={styles.side}>
            <span className={styles.row}>{forth.title}</span>
            <span className={styles.row}>{forth.value}</span>
          </div>
        </div>
      </div>
    </>
  )}

export default GenericRowComponent;