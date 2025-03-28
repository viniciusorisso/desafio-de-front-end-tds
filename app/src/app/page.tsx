import CitiesList from "./components/cities-list";
import HeaderComponent from "./components/header";
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <div className={[styles.box, "mainText black-theme"].join(" ")}>
        <HeaderComponent title="Weather" description="Select a city" />
        <CitiesList />
      </div>
    </>
  );
}
