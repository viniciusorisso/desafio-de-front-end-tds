import svg113 from "@/app/assets/icons/113.svg"
import svg116 from "@/app/assets/icons/116.svg"
import svg119 from "@/app/assets/icons/119.svg"
import svg122 from "@/app/assets/icons/122.svg"
import svg143 from "@/app/assets/icons/143.svg"
import svg200 from "@/app/assets/icons/200.svg"
import svg230 from "@/app/assets/icons/230.svg"
import svg248 from "@/app/assets/icons/248.svg"
import svg296 from "@/app/assets/icons/296.svg"
import svg308 from "@/app/assets/icons/308.svg"
import svg338 from "@/app/assets/icons/338.svg"
import svg353 from "@/app/assets/icons/353.svg"
import svg356 from "@/app/assets/icons/356.svg"
import svg359 from "@/app/assets/icons/359.svg"
import svg365 from "@/app/assets/icons/365.svg"
import svg368 from "@/app/assets/icons/368.svg"
import svg371 from "@/app/assets/icons/371.svg"
import svg374 from "@/app/assets/icons/374.svg"
import svg377 from "@/app/assets/icons/377.svg"
import svg386 from "@/app/assets/icons/386.svg"
import svg389 from "@/app/assets/icons/389.svg"
import svg392 from "@/app/assets/icons/392.svg"
import svg395 from "@/app/assets/icons/395.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { equivalence } from "./equivalence"
import styles from "./style.module.css"

type ComponentProps = {
  code: string;
  description: string;
}

const SVGS: Record<string, StaticImport> = {
  "113": svg113,
  "116": svg116,
  "119": svg119,
  "122": svg122,
  "143": svg143,
  "200": svg200,
  "230": svg230,
  "248": svg248,
  "296": svg296,
  "308": svg308,
  "338": svg338,
  "353": svg353,
  "356": svg356,
  "359": svg359,
  "365": svg365,
  "368": svg368,
  "371": svg371,
  "374": svg374,
  "377": svg377,
  "386": svg386,
  "389": svg389,
  "392": svg392,
  "395": svg395,
}

const IconRenderComponent = ({ code, description }: ComponentProps) => {
  const obj = equivalence.find(el => el.code === +code);
  
  if (!obj?.icon) {
    return <Image className={styles.image} src={SVGS[113]} alt={description} />
  }
  
  return <>
    <Image className={styles.image} src={SVGS[obj!.icon]} alt={description} />
  </>
}

export default IconRenderComponent;