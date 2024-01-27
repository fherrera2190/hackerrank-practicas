array = [1, 3, 2, 6, 1, 2];
k = 3;

function divisibleSumPairs(n, k, array) {
  // Write your code here
  const aux = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      console.log(array[i] + array[j]);
      if ((array[i] + array[j]) % k === 0) {
        aux.push(array[i] + "" + array[j]);
      }
    }
  }
  return aux.length;
}

divisibleSumPairs(array.length, k, array);
