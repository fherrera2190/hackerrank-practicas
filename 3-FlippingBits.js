function flippingBits(n) {
  // Write your code here
  //   console.log(Math.pow(2, 32));
  if (n > Math.pow(2, 32)) {
    return n;
  }
  let aux = [];
  let aux2 = [];
  let num = n;

  if (n === 0) return 4294967295;
  if (n === 1) return 4294967294;

  while (num >= 2) {
    aux.unshift(num % 2);
    num = +(num / 2).toString().split(".")[0];
  }
  aux.unshift(1);
  for (let i = 0; i < 32 - aux.length; i++) {
    aux2.push(0);
  }
  aux = [...aux2, ...aux];
  aux = aux.map((value) => {
    if (value) {
      return 0;
    } else {
      return 1;
    }
  });

  let result = 0;
  for (let i = 0; i < aux.length; i++) {
    result = aux[i] * Math.pow(2, 31 - i) + result;
  }
  return result;
}

// console.log(flippingBits(2147483647));

// ------------Nada que ver-------------

// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };
// Object.setPrototypeOf(rabbit,animal);
// console.log(rabbit.eats);

// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,
//   a:"nemesis"
// };

// for(let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     alert(`Es nuestro: ${prop}`); // Es nuestro: jumps
//   } else {
//     alert(`Es heredado: ${prop}`); // Es heredado: eats
//   }
// }

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
// };

// let pockets = {
//   money: 2000,
// };

// pockets.__proto__ = bed;

// bed.__proto__ = table;

// table.__proto__ = head;

// console.log(pockets.pen)
// console.log(bed.glasses)

// function Rabbit() {}
// por defecto:
// Rabbit.prototype = { constructor: Rabbit }

// let rabbit = new Rabbit(); // hereda de {constructor: Rabbit}

// alert(rabbit.constructor === Rabbit);
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert( rabbit.eats );

// let obj = {};

// console.log(Object.prototype)
// console.log(obj.__proto__ === Object.prototype); // true

// console.log(obj.toString === obj.__proto__.toString); //true
// console.log(obj.toString === Object.prototype.toString);

let animal = {
  eats: true
};

// crear un nuevo objeto con animal como prototipo
let rabbit = Object.create(animal); // lo mismo que {__proto__: animal}

console.log(rabbit.eats); // true

console.log(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {eats:false}); 

console.log(rabbit.eats); // true
