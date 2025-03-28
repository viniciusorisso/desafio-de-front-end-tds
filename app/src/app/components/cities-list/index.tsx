'use client'

import styles from "./style.module.css"
import { useRouter } from 'next/navigation'
 
const CitiesList = () => {
  const router = useRouter()

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
          {arr.map(el => <a className={styles.city} key={el} onClick={() => router.push('/place/' + el)}>
            {el}
          </a>)}
      </div>
    </>
  )
}

export default CitiesList;