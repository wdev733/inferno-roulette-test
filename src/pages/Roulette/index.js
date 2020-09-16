import Inferno from "inferno";
import Component from "inferno-component";
import { connect } from "inferno-redux";

import {
  RouletteStatistics,
  RouletteBettingBoard,
} from "../../components";

import styles from "./styles.scss";

class Roulette extends Component {
  render() {
    const {
      statistics,
      bettings,
      currentStatus,
      lastWinner,
    } = this.props;

    const winner = currentStatus === "Roll" ? lastWinner : "";

    return (
      <div className={styles.root}>
        <div className={styles.status}>
          <RouletteStatistics className={styles.statistics} data={statistics} />
        </div>
        <div className={styles.roll}>
          <h2>{currentStatus === "Roll" ? "Winner: " : "Betting Time"}</h2>
          {currentStatus === "Roll" && lastWinner !== "" && (
            <img
              className={styles.winner}
              src={`src/assets/images/bet-${lastWinner}.png`}
            />
          )}
        </div>
        <div className={styles.bettings}>
          <RouletteBettingBoard
            className={styles.board}
            board="black"
            multiple={2}
            data={bettings.black}
            winner={winner}
          />
          <RouletteBettingBoard
            className={styles.board}
            board="green"
            multiple={14}
            data={bettings.green}
            winner={winner}
          />
          <RouletteBettingBoard
            className={styles.board}
            board="red"
            multiple={2}
            data={bettings.red}
            winner={winner}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ roulette }) => {
  const { statistics, bettings, currentStatus, lastWinner } = roulette;
  return { statistics, bettings, currentStatus, lastWinner };
};

export default connect(mapStateToProps, null)(Roulette);
