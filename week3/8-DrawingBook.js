function pageCount(n, p) {
  // Write your code here
  const frontFlips = Math.floor(p / 2);
  const backFlips = Math.floor(((n % 2 === 0 ? n + 1 : n) - p) / 2);

  return Math.min(frontFlips, backFlips);
}
