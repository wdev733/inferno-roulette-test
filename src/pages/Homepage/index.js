import Inferno from 'inferno'
import Component from 'inferno-component'
import { Link } from "inferno-router";

import styles from "./styles.scss";

class Homepage extends Component {
  render () {
    return (
      <div className={styles.root}>
        <h1>
          This is the homepage
        </h1>
        <Link className={styles.link} to="/roulette">Go to Roulette Page</Link>
      </div>
    )
  }
}

export default Homepage
