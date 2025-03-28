import styles from './style.module.css'
import Globe from '@/app/assets/icons/la_globe-americas.svg'
import Image from 'next/image';

type ComponentProps = {
  title: string;
  description: string;
  icon?: string;
}

export default async function HeaderComponent({ title, description, icon = Globe}: ComponentProps) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.box}>
          <p className={styles.title}>
            { title }
          </p>
          <p className={styles.description}>
            { description }
          </p>
        </div>
        <Image className={styles.icon} src={icon} alt={title + " icon"} />
      </div>
    </>
  );
}
