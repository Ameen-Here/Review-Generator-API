import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <h1 id={styles.logo}>Review Generator</h1>
      </nav>
    </header>
  );
};

export default Header;
