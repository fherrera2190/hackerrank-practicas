function lonelyinteger(a) {
  // Write your code here
  let aux = [];
  for (let i = 0; i < a.length; i++) {
    if (aux[a[i]]) {
      aux[a[i]] += 1;
    } else {
      aux[a[i]] = 1;
    }
  }
  return aux.findIndex((value) => value === 1);
}

