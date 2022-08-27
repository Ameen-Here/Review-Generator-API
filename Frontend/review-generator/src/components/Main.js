import styles from "./Main.module.css";
import MainContent from "./MainContent";
import SideNav from "./SideNav";

const Main = () => {
  return (
    <main id={styles.main}>
      <div id={styles.sideNav}>
        <SideNav />
      </div>
      <MainContent />
    </main>
  );
};

export default Main;
