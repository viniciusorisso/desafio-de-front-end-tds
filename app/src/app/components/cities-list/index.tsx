import Link from "next/link"
import styles from "./style.module.css"
 
const CitiesList = () => {
  const arr = [
    "Dallol",
    "Fairbanks",
    "Londres",
    "Recife",
    "Vancouver",
    "Yakutsk"
  ]

  return (
    <>
      <div className={styles.box}>
          {arr.map(el =>
            <Link className={styles.city} key={el} href={'/place/' + el}>
            {el}
          </Link>)}
      </div>
    </>
  )
}

export default CitiesList;