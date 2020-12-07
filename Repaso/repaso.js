// Haciendo uso de la funcion 'window.prompt()' pregunte al usuario un número
// Y escriba la tabla de multiplicación para dicho número en el documento HTML
// Haciendo uso de la función document.writeln
// Ejemplo:
// user_in = 10 (El número que dio el usuario es 10)
// 10 * 1 = 10
// 10 * 2 = 20
// 10 * 3 = 30
// ...
// 10 * 10 = 100
// NOTA! La función window.prompt retorna el valor que el usuario le pase, así que puede ser buena
// idea almacenarlo en una variable, y para evitar la redundacia del codigo y no escribir múltiples
// document.writeln se podría usar un bucle (For, while, o do:while)
// NOTA2! Todos estos cálculos deben ocurrir luego de que la página html cargue, no antes

function multiplicacion(variable){
    for (let i=1 ; i<=10 ; i++){
        document.writeln(`<p>${variable}x${i}=${variable*i}</p>`)
    }
}

// # # 
//  # 
// # #

function calculo(filas, columnas){
    let chess = [];
    for (let i=1 ; i<=filas ; i++){
        let fila = "";
        // COMPARACION? VALOR1: VALOR2;
        let caracter;
        if (i % 2 == 0){
            caracter = " ";
        } else {
            caracter = "#"
        }
        for ( let j=1 ; j<=columnas ; j++){
            fila += caracter;
            if (caracter == "#"){
                caracter = " ";
            } else {
                caracter = "#";
            }
        }

        chess.push(fila)
    }  
    return chess
}
let board = calculo(10, 10);
console.table(board)
