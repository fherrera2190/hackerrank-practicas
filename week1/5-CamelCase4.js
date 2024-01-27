// i pad
// mousePad()
// CodeSwarm
// orange highlighter

// S;V;iPad
// S;V;pictureFrame
// S;C;OrangeHighlighter
// S;C;LargeSoftwareBook
// S;M;plasticCup()
// C;M;mouse pad
// C;C;code swarm
// C;C;coffe machine
// C;V;mobile phone

const input = `C;V;can of coke
S;M;sweatTea()
S;V;epsonPrinter
C;M;santa claus
C;C;mirror`;

const array = input.split("\n");
function CVCMCC(newWord, i) {
  newWord = newWord.split(" ");
  for (i; i < newWord.length; i++) {
    newWord[i] = newWord[i][0].toUpperCase() + newWord[i].slice(1);
  }
  return newWord.join("").trim();
}

function SVSCSM(newWord) {
  let aux = [...newWord];
  aux = aux.map((caracter) => {
    if (caracter === caracter.toUpperCase()) {
      return " " + caracter;
    }
    return caracter;
  });
  return aux.join("").toLowerCase().trim();
}

array.forEach((word) => {
  let newWord = word.slice(4);
  switch (word.slice(0, 4)) {
    case "S;V;":
      console.log(SVSCSM(newWord));
      break;
    case "S;C;":
      console.log(SVSCSM(newWord));
      break;
    case "S;M;":
      newWord = newWord.slice(0, newWord.length - 2);
      console.log(SVSCSM(newWord));
      break;
    case "C;V;":
      console.log(CVCMCC(newWord, 1));
      break;
    case "C;M;":
      console.log(CVCMCC(newWord, 1) + "()");
      break;
    case "C;C;":
      console.log(CVCMCC(newWord, 0));
      break;
  }
});
