function gridChallenge(grid) {
  let prev = grid[0].split("").sort().join("");

  for (let i = 1; i < grid.length; i++) {
    const curr = grid[i].split("").sort().join("");
    for (let j = 0; j < curr.length; j++) {
      if (prev[j] > curr[j]) {
        return "NO";
      }
    }
    prev = curr;
  }

  return "YES";
}
