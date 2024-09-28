function pylons(k, arr) {
  // Write your code here
  let count = 0;
  let n = arr.length;
  let i = 0;

  let pos = i + k - 1;
  while (i < n) {
    if (arr[pos] == 1) {
      count++;
      i = pos + k;
      pos = i + k - 1;
      if (pos >= n) {
        pos = n - 1;
      }
    } else {
      pos--;
      if (pos < 0 || pos <= i - k) {
        return -1;
      }
    }
  }
  return "last count", count;
}
