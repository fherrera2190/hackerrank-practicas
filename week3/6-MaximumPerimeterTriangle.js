function maximumPerimeterTriangle(sticks) {
  // Write your code here
  const getMaxSide = (t) => Math.max(t[0], t[1], t[2]);
  const getMinSide = (t) => Math.min(t[0], t[1], t[2]);
  const nonDegenerate = (t) => t[0] + t[1] > t[2];

  sticks.sort((a, b) => a - b);
  let maxT = [-1, -1, -1];

  for (let i = 0; i + 3 <= sticks.length; i++) {
    const t = sticks.slice(i, i + 3);
    if (nonDegenerate(t)) {
      if (getMaxSide(t) > getMaxSide(maxT)) {
        maxT = t;
      } else {
        if (getMaxSide(t) === getMaxSide(maxT)) {
          if (getMinSide(t) > getMinSide(maxT)) {
            maxT = t;
          }
        }
      }
    }
  }

  return getMinSide(maxT) === -1 ? [-1] : maxT;
}
