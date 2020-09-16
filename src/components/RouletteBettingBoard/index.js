import Inferno from "inferno";
import Component from "inferno-component";

import styles from "./styles.scss";
import classnames from "classnames";

class RouletteBettingBoard extends Component {
  render() {
    const { board, multiple, data, winner, className } = this.props;

    let totalAmount = 0;

    for (let i = 0; i < data.length; i++) {
      totalAmount += parseFloat(data[i].amount);
    }

    const winnerClass =
      winner === "" ? "" : winner === board ? styles.winner : styles.failure;

    const winnerStatus = winner === "" ? 0 : winner === board ? 1 : -1;

    return (
      <div className={classnames(styles.root, winnerClass, className)}>
        <div className={styles.top}>
          <img
            src={`src/assets/images/bet-${board}.png`}
            className={styles["bet-icon"]}
          />
          <span className={styles.bet}>Place Bet</span>
          <span className={styles.multiple}>
            {multiple}
            <sup>x</sup>
          </span>
        </div>
        <div className={styles.total}>
          <div className={styles.count}>{`${data.length} Total Bets`}</div>
          <div className={classnames(styles.amount, winnerClass)}>
            {`${winnerStatus === 1 ? "+" : winnerStatus === -1 ? "-" : ""}${
              winnerStatus === 1
                ? (totalAmount * 2).toFixed(2)
                : totalAmount.toFixed(2)
            } `}
            <svg
              fill="#ff0000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1121.51 1769.07"
              height="15"
              style="margin-left: 5px;"
            >
              <path
                d="M806.69,17.19c-71.91-6.87-170.19,124.3-52.4,422.06C815.36,593.18,1079.51,1405.5,540,1426.46,345.6,1433.68,123,1265.3,178.3,864.19c18.07-131.17,48.06-210.67,80.22-258C132.07,728.67,125.25,808.69,82.41,901.47-59.8,1209.42,14.3,1627,335.33,1750.35c29.82,11.45,65.74,3,99.85,9S501.57,1786,540,1786c439.89,0,605.55-403.68,594.31-771.72-1.31-42.83-45.41-100-50.12-140.69C1039,483,638.66,151.61,806.69,17.19Z"
                transform="translate(-13.34 -16.93)"
              ></path>
              <path
                d="M446.81,1323.08c-47.93-41.84-55.51-121-10.86-181.8,58.31-79.39,150.45-133.42,150.45-133.42s30.32,21.24,52.65,87.53c16.54,49.28,16.72,143-31.52,215.64,293.13-116.08,59.8-891.28-132.41-879,88.3,136.89,11.81,247-60.17,365.71-6.36,10.49,1.19,30.64-5.22,41.13-23.71,38.79-47.11,77.64-65.25,117.09C275.82,1105.86,326,1296.74,446.81,1323.08Z"
                transform="translate(-13.34 -16.93)"
              ></path>
            </svg>
          </div>
        </div>
        <div className={styles.players}>
          {data.map((d) => (
            <div className={styles.player}>
              <img className={styles.avatar} src={d.avatar} />
              <div className={styles.name}>{d.name}</div>
              <div className={classnames(styles.amount, winnerClass)}>
                {`${winnerStatus === 1 ? "+" : winnerStatus === -1 ? "-" : ""}${
                  winnerStatus === 1
                    ? parseFloat(d.amount * 2).toFixed(2)
                    : parseFloat(d.amount).toFixed(2)
                } `}
                <svg
                  fill="#ff0000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1121.51 1769.07"
                  height="15"
                  style="margin-left: 5px;"
                >
                  <path
                    d="M806.69,17.19c-71.91-6.87-170.19,124.3-52.4,422.06C815.36,593.18,1079.51,1405.5,540,1426.46,345.6,1433.68,123,1265.3,178.3,864.19c18.07-131.17,48.06-210.67,80.22-258C132.07,728.67,125.25,808.69,82.41,901.47-59.8,1209.42,14.3,1627,335.33,1750.35c29.82,11.45,65.74,3,99.85,9S501.57,1786,540,1786c439.89,0,605.55-403.68,594.31-771.72-1.31-42.83-45.41-100-50.12-140.69C1039,483,638.66,151.61,806.69,17.19Z"
                    transform="translate(-13.34 -16.93)"
                  ></path>
                  <path
                    d="M446.81,1323.08c-47.93-41.84-55.51-121-10.86-181.8,58.31-79.39,150.45-133.42,150.45-133.42s30.32,21.24,52.65,87.53c16.54,49.28,16.72,143-31.52,215.64,293.13-116.08,59.8-891.28-132.41-879,88.3,136.89,11.81,247-60.17,365.71-6.36,10.49,1.19,30.64-5.22,41.13-23.71,38.79-47.11,77.64-65.25,117.09C275.82,1105.86,326,1296.74,446.81,1323.08Z"
                    transform="translate(-13.34 -16.93)"
                  ></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RouletteBettingBoard;
