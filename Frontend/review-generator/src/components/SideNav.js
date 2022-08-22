import classes from "./SideNav.module.css";

const SideNav = () => {
  return (
    <div className={classes.sideNav}>
      <h3>DOCUMENTATION</h3>
      <ul>
        <li>
          <a href="#">Authentication</a>
        </li>
        <li>
          <a href="#">Review based on country</a>
        </li>
        <li>
          <a href="#">Category selection</a>
        </li>
        <li>
          <a href="#">Available country list</a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
