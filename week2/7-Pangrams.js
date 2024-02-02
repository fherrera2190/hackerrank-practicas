function pangrams(s) {
  // Write your code here
  let string = s.toLowerCase().split("");
  let aux = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  string.forEach((char) => {
    aux = aux.filter((element) => element !== char);
  });
  if (aux.length === 0) {
    return "pangram";
  }
  return "not pangram";
}

console.log(
  pangrams("We promptly judged antique ivory buckles for the next prize")
);
