import CitiesList from "./components/cities-list";
import HeaderComponent from "./components/header";
import styles from "./page.module.css"

export default async function Home() {
  return (
    <>
      <div className={[styles.box, "mainText black-theme"].join(" ")}>
        <HeaderComponent title="Weather" description="Select a city" icon="" />
        <CitiesList />
      </div>
    </>
  );
}
