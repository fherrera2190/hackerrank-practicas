function marsExploration(s) {
  // Write your code here
  const aux = ["S", "O", "S"];
  let index = 0;
  const word = s.split("");
  let count = 0;

  word.forEach((letter) => {
    if (index > 2) {
      index = 0;
    }
    if (letter !== aux[index]) {
      count++;
    }
    index++;
  });
  return count;
}

console.log(marsExploration("OOSDSSOSOSWEWSOSOSOSOSOSOSSSSOSOSOSS"));

console.log("OOSDSSOSOSWEWSOSOSOSOSOSOSSSSOSOSOSS".length);
