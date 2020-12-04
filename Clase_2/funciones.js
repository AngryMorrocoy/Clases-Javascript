function saludo(nombre){
    console.log("Hola " + nombre);
}

function imprimir_array(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i]); 
    }
}

function factorial(n) {
    let f = 1;
    
    for(let i = 1; i <= n; i++){
        f *= i;
    }
    return f;
}

function crearMatriz(n) {
    let matriz = [];

    for(let i = 0; i < n; i++){
        let fila = [];

        for(let j = 0; j < n; j++){
            
            fila.push(Math.abs(i - j));
        
        }
        matriz.push(fila);
    }

    return matriz;
}

function verMatriz(matriz){
    for(let i = 0; i < matriz.length; i++){
        let fila = "";
        for(let j = 0; j < matriz.length; j++){
            fila = fila + " " + matriz[i][j];
        }
        console.log(fila);
    }
}

let mi_matriz = crearMatriz(9);

verMatriz(mi_matriz)
