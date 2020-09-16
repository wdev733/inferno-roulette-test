import {
  ROULETTE_INIT,
  ROULETTE_ROLL,
  ROULETTE_BET,
  ROULETTE_RESET,
} from "../../constants/actionTypes";

export const rouletteInit = ({ statistics, bettings }) => ({
  type: ROULETTE_INIT,
  payload: { statistics, bettings },
});

export const rouletteRoll = ({ statistics }) => ({
  type: ROULETTE_ROLL,
  payload: { statistics },
});

export const rouletteBet = ({ type, data }) => ({
  type: ROULETTE_BET,
  payload: { type, data },
});


export const rouletteReset = () => ({
  type: ROULETTE_RESET,
  payload: {},
});

