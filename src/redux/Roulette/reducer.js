import {
  ROULETTE_INIT,
  ROULETTE_RESET,
  ROULETTE_BET,
  ROULETTE_ROLL,
} from "../../constants/actionTypes";

const initialState = {
  statistics: {
    gold: 0,
    blue: 0,
    red: 0,
  },
  currentStatus: "Connecting...",
  bettings: {
    black: [],
    red: [],
    green: [],
  },
  lastWinner: "",
};

const rouletteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROULETTE_INIT: {
      let { statistics, bettings } = action.payload;
      return {
        ...state,
        statistics: {
          ...statistics,
        },
        bettings,
        currentStatus: "Rolling",
      };
    }
    case ROULETTE_BET: {
      const { type, data } = action.payload;
      const oldState = [...state.bettings[type]];
      oldState.push(data);

      return {
        ...state,
        bettings: {
          ...state.bettings,
          [type]: [...oldState],
        },
      };
    }
    case ROULETTE_ROLL: {
      let { statistics } = action.payload;
      console.log(statistics);
      const oldStatistics = state.statistics;

      let lastWinner = "";

      if (statistics.gold > oldStatistics.gold) {
        lastWinner = "green";
      } else if (statistics.blue > oldStatistics.blue) {
        lastWinner = "black";
      } else {
        lastWinner = "red";
      }

      return {
        ...state,
        statistics: {
          ...statistics,
        },
        lastWinner,
        currentStatus: "Roll",
      };
    }
    case ROULETTE_RESET:
      return {
        ...state,
        bettings: {
          red: [],
          black: [],
          green: [],
        },
        currentStatus: "Rolling",
      };
    default:
      return state;
  }
};

export default rouletteReducer;
