function sansaXor(arr) {
  // Write your code here
  if (arr.length % 2 === 0) return 0;

  let nSet = new Set();

  for (let i = 0; i < arr.length; i += 2) {
    nSet.has(arr[i]) ? nSet.delete(arr[i]) : nSet.add(arr[i]);
  }
  return [...nSet].reduce((acc, el) => (acc === null ? el : acc ^ el), 0);
}
