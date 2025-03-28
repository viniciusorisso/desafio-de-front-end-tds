import { equivalence } from "./equivalence"
import styles from "./style.module.css"
import dynamic from "next/dynamic"

type ComponentProps = {
  code: string;
  description: string;
}

const SVGS = {
  "113": dynamic(() => import("@/app/assets/icons/113.tsx")),
  "116": dynamic(() => import("@/app/assets/icons/116.tsx")),
  "119": dynamic(() => import("@/app/assets/icons/119.tsx")),
  "122": dynamic(() => import("@/app/assets/icons/122.tsx")),
  "143": dynamic(() => import("@/app/assets/icons/143.tsx")),
  "200": dynamic(() => import("@/app/assets/icons/200.tsx")),
  "230": dynamic(() => import("@/app/assets/icons/230.tsx")),
  "248": dynamic(() => import("@/app/assets/icons/248.tsx")),
  "296": dynamic(() => import("@/app/assets/icons/296.tsx")),
  "308": dynamic(() => import("@/app/assets/icons/308.tsx")),
  "338": dynamic(() => import("@/app/assets/icons/338.tsx")),
  "353": dynamic(() => import("@/app/assets/icons/353.tsx")),
  "356": dynamic(() => import("@/app/assets/icons/356.tsx")),
  "359": dynamic(() => import("@/app/assets/icons/359.tsx")),
  "365": dynamic(() => import("@/app/assets/icons/365.tsx")),
  "368": dynamic(() => import("@/app/assets/icons/368.tsx")),
  "371": dynamic(() => import("@/app/assets/icons/371.tsx")),
  "377": dynamic(() => import("@/app/assets/icons/377.tsx")),
  "386": dynamic(() => import("@/app/assets/icons/386.tsx")),
  "374": dynamic(() => import("@/app/assets/icons/374.tsx")),
  "389": dynamic(() => import("@/app/assets/icons/389.tsx")),
  "392": dynamic(() => import("@/app/assets/icons/392.tsx")),
  "395": dynamic(() => import("@/app/assets/icons/395.tsx")),
  "400": dynamic(() => import("@/app/assets/icons/400.tsx")),
  "401": dynamic(() => import("@/app/assets/icons/401.tsx")),
  "500": dynamic(() => import("@/app/assets/icons/500.tsx")),
}

const IconRenderComponent = ({ code }: ComponentProps) => {
  const obj = equivalence.find(el => el.code === +code);
  
  if (!obj?.icon) {
    const GeneralComponent = SVGS["500"]

    return <div className={styles.image} >
      <GeneralComponent />
      </div>
  }
  
  // @ts-expect-error typo issues
  const GeneralComponent = SVGS[obj.icon]

  return <div className={styles.image} >
      <GeneralComponent />
    </div>
}

export default IconRenderComponent;