import Inferno from "inferno";
import Component from "inferno-component";
import { connect } from "inferno-redux";

import { Header } from "../../components";
import { ROOM, MESSAGE_TYPE } from "../../constants/defaultValues";
import { parseBettingPlayers } from "../../utils/function";
import {
  rouletteInit,
  rouletteBet,
  rouletteRoll,
  rouletteReset,
} from "../../redux/actions";

import styles from "./styles.scss";

import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket("wss://rustchance.com/feed");

class App extends Component {
  componentWillMount() {
    client.onopen = () => {
      console.log("WebSocket Client Connected");

      // Join Roulette Room
      client.send(
        JSON.stringify({
          type: "join",
          room: "roulette",
          data: null,
        })
      );
    };

    client.onmessage = (message) => {
      this.handleMessage(message);
    };
  }

  handleMessage = (message) => {
    const {
      actionRouletteInit,
      actionRouletteBet,
      actionRouletteRoll,
      actionRouletteReset,
    } = this.props;
    const data = JSON.parse(message.data);

    if (data.room !== ROOM.ROULETTE) {
      return;
    }

    if (data.type === MESSAGE_TYPE.LIST) {
      const { statistics, current } = data.data;

      const greenPlayers = parseBettingPlayers(current.green);
      const redPlayers = parseBettingPlayers(current.red);
      const blackPlayers = parseBettingPlayers(current.black);

      actionRouletteInit({
        statistics,
        bettings: {
          green: [...greenPlayers],
          red: [...redPlayers],
          black: [...blackPlayers],
        },
      });
    }

    if (
      data.type === MESSAGE_TYPE.RED ||
      data.type === MESSAGE_TYPE.BLACK ||
      data.type == MESSAGE_TYPE.GREEN
    ) {
      actionRouletteBet({
        type: data.type.split("_")[1],
        data: {
          name: data.data.p.n,
          avatar: data.data.p.a,
          amount: (data.data.a / 100).toFixed(2),
        },
      });
    }

    if (data.type === MESSAGE_TYPE.ROLL) {
      actionRouletteRoll({
        statistics: data.data.statistics,
      });

      setTimeout(function() {
        actionRouletteReset()
      }, 6000);
    }
  };

  render() {
    return (
      <div className={styles.root}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default connect(null, {
  actionRouletteInit: rouletteInit,
  actionRouletteBet: rouletteBet,
  actionRouletteRoll: rouletteRoll,
  actionRouletteReset: rouletteReset,
})(App);
