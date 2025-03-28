import styles from './style.module.css'
import IconRenderComponent from '../icon-render';

type ComponentProps = {
  title: string;
  description: string;
  icon?: string;
}

export default function HeaderComponent({ title, description, icon = "500" }: ComponentProps) {
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
        <div className={styles.icon} >
          <IconRenderComponent code={icon} description={description} />
        </div>
      </div>
    </>
  );
}
