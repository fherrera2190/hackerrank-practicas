function matchingStrings(strings, queries) {
  // Write your code here
  const aux = [];

  for (let index = 0; index < queries.length; index++) {
    aux.push(0);
  }
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) {
        aux[i]++;
      }
    }
  }
  return aux
}

strings = ["aba", "baba", "aba", "xzxb"];
queries = ["aba", "xzxb", "ab"];
matchingStrings(strings, queries);



function findMedian(arr) {
    // Write your code here
    arr.sort((a, b) => a - b)
    console.log(arr)

    return arr[(arr.length-1)/ 2]
}

console.log(findMedian([0,1,2,4,6,5,3]))
