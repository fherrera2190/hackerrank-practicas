function gamingArray(arr) {
  // Write your code here
  let max = -Infinity;
  let res = 0;

  for (let n of arr)
    if (n > max) {
      max = n;
      res++;
    }

  return res % 2 ? "BOB" : "ANDY";
}
