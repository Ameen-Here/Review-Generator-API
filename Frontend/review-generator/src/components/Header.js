import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <h1 id={styles.logo}>Review Generator</h1>

        <ul>
          <li>
            <a href="#">Get Api Key</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
