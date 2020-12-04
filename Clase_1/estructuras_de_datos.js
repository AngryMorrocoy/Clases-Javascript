// Listas

let mi_lista = ["13", null, 8, "Arroz", 10]

// console.log("La lista tiene " + String(mi_lista.length) + " elementos");
// console.log(mi_lista[5]);
// console.log(typeof mi_lista)

mi_lista.push(17);
// console.log(mi_lista[5]);

let ultimo = mi_lista.pop()

// console.log(ultimo)

let otra_lista = ["perro", "gato", "tortuga"];

let listas_concatenadas = mi_lista.concat(otra_lista);

// console.log(listas_concatenadas)

mi_lista.push(otra_lista)
console.log(mi_lista);

