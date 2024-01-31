function diagonalDifference(arr) {
  // Write your code here
  let d1 = 0;
  let d2 = 0;
  arr.forEach((arr, i) => {
    d1 += arr[i];
    d2 += arr[arr.length - 1 - i];
  });
  return Math.abs(d1 - d2);
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
