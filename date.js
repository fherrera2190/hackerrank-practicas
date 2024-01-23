const hora1 = new Date("2024-01-09T00:00:00.616Z");
const hora2 = new Date("2024-01-11T00:00:00.616Z");
console.log(hora1);
console.log(hora2);
console.log(hora1.getTime());
console.log(hora2.getTime());
console.log(Date.now() - hora1.getTime());

console.log("<<<<<<<<<<<<<<<<<<<<<");

console.log(hora1.getFullYear())
console.log(hora1.getDay())
console.log(hora1.getMonth())
console.log(hora1.getDate())

const limiteFecha = new Date();
console.log(limiteFecha)
limiteFecha.setDate(limiteFecha.getDate() - 2);

// console.log(limiteFecha)
// const limiteFecha = new Date();
// console.log(new Date("2024-01-09T00:00:00.616Z"));
// limiteFecha.setDate(limiteFecha.getDate() - 2);
// console.log(limiteFecha);

// const s = "07:05:45PM"
// const fecha = new Date("2000-01-01 " + s.slice(0, s.length-2)+" " +s.slice(s.length - 2, s.length))
// console.log(fecha.toString().slice(16,24))
