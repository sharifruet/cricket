mycb = (r)=>{
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(r)
    }

    let fetchRes = fetch("http://localhost:3000/api", options );
    fetchRes.then(res =>
    res.json()).then(d => {
        console.log(d)
    });
};


{
    inningsNumber: 1,
    runRate: '5.30',
    overProgress: '50',
    declared: false,
    scorecard: {
      runs: 265,
      wkts: 8,
      ballsFaced: 300,
      fours: 26,
      sixes: 7,
      allOut: false,
      battingStats: [Array],
      bowlingStats: [Array],
      fow: [Array],
      extras: [Object],
      declared: false
    },
    overHistory: [
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object]
    ],
    rodl: null,
    battingTeamId: 22,
    bowlingTeamId: 14,
    blocks: null,
    balls: null,
    ballsRemaining: null,
    scorePrediction: 254
  },