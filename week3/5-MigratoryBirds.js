function migratoryBirds(arr) {
  // Write your code here
  let count = new Array(5).fill(0);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - 1]++;
  }
  let highestCount = [...count].sort((a, b) => b - a);
  let answer = count.indexOf(highestCount[0]);
  return answer + 1;
}
