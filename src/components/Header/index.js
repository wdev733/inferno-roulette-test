import Inferno from "inferno";
import Component from "inferno-component";
import { Link } from "inferno-router";

import styles from "./styles.scss";

const NavLink = ({ to, title, desc }) => (
  <Link to={to} className={styles["nav-link"]}>
    <span className={styles["nav-title"]}>{title}</span>
    <span className={styles["nav-desc"]}>{desc}</span>
  </Link>
);

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <Link to={`/`}>
          <img src="src/assets/images/logo.png" />
        </Link>
        <ul className={styles.navbar}>
          <li className={styles["nav-item"]}>
            <NavLink
              to="/roulette"
              className={styles["nav-link"]}
              title="ROULETTE"
              desc="NEW!"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
