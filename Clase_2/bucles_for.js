// Sintaxis
// for (variable; condicion; codigo ){
//   *CODIGO A EJECUTAR*
// }

// Imprimir los numeros del 1 al 10
let n = 10

// for (let i = 1; i <= n; i++){
//     if( i%2 == 0 ){
//         console.log(i);
//     }
// }

let lista = [2, 10, 15, 30, 90, "pasta", "carne"]

let lista_numeros = [];
let lista_strings = [];

for (let i = 0; i < lista.length; i++){
    
    if ( typeof lista[i] == typeof ""){
        lista_strings.push(lista[i]);
    }
    else {
        lista_numeros.push(lista[i]);
    }
    
}

console.log(lista_strings)
