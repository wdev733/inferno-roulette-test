export const parseBettingPlayers = (data) => {
  const ret = [];

  for (let i = 0; i < data.length; i++) {
    ret.push({
      name: data[i].p.n,
      avatar: data[i].p.a,
      amount: (data[i].a / 100).toFixed(2),
    });
  }

  return ret;
};
