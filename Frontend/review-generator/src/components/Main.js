import styles from "./Main.module.css";
import MainContent from "./MainContent";
import SideNav from "./SideNav";

const Main = () => {
  return (
    <main id={styles.main}>
      <SideNav />
      <MainContent />
    </main>
  );
};

export default Main;
