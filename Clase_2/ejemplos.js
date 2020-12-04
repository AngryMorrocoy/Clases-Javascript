  // Imprimir todos los objetos en un array con un bucle for

let lista_de_compras = ["Arroz", "Harina", "Queso", "Lentejas"];

for (let indice = 0; indice < lista_de_compras.length; indice++){
  console.log(lista_de_compras[indice]);
}

  // Imprimir los numeros del 1 al 10, que sean par (divisibles por 2)

// Con while

let contador = 1

while (contador <= 10) {
  if ( (contador % 2) == 0 ){
    console.log(contador)
  }
  contador++;
}

// Con for

for (let numero = 1; numero <= 10; numero++){
  if (numero % 2 == 0){
    console.log(numero)
  }
}

