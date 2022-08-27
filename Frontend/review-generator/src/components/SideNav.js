import classes from "./SideNav.module.css";
import { Link } from "react-scroll";

// somewhere in your markup

const SideNav = () => {
  return (
    <div className={classes.sideNav}>
      <h3>TABLE OF CONTENTS</h3>
      <ul>
        <li className={classes.sideNavList}>
          <Link
            to="oneReview"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            Get Review
          </Link>
        </li>
        <li className={classes.sideNavList}>
          <Link
            to="randomReviews"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            Reviews with more options
          </Link>
        </li>
        <li className={classes.sideNavList}>
          <Link
            to="countryList"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            Available Country List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
