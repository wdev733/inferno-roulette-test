import Inferno from "inferno";
import Component from "inferno-component";

import styles from "./styles.scss";
import classnames from "classnames";

class RouletteStatistics extends Component {
  render() {
    const { data, className } = this.props;
    return (
      <div className={classnames(styles.root, className)}>
        <img
          className={styles["bet-icon"]}
          src="src/assets/images/bet-black.png"
        />
        <span className={styles.number}>{data.blue}</span>
        <img
          className={styles["bet-icon"]}
          src="src/assets/images/bet-green.png"
        />
        <span className={styles.number}>{data.gold}</span>
        <img
          className={styles["bet-icon"]}
          src="src/assets/images/bet-red.png"
        />
        <span className={styles.number}>{data.red}</span>
      </div>
    );
  }
}

export default RouletteStatistics;
