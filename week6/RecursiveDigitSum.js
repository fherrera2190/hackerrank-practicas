function superDigit(n, k) {
  // Write your code here
  let sum = 0;

  for (let char of n) {
    sum += Number(char);
  }

  sum *= k;

  if (sum <= 9) return sum;

  return superDigit(String(sum), 1);
}
