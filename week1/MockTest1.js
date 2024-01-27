function findMedian(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  console.log(arr);

  return arr[(arr.length - 1) / 2];
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
