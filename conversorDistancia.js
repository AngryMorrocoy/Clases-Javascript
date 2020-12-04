
function convertirMedida(d, desde, hacia, tipo){
    let longitudes = [
        "m", "c", "d", "", "da", "h", "k"
    ];

    for (let i = 0; i < longitudes.length; i++){
        longitudes[i] += tipo;
    }

    let calculo;
    let indice1, indice2;

    indice1 = longitudes.indexOf(desde);
    indice2 = longitudes.indexOf(hacia);

    if (indice1 > indice2){
        calculo = (n) => n * 10;
    } else if (indice2 > indice1){
        calculo = (n) => n / 10; 
    }

    let sufijo = longitudes[indice2]

    let diferencia = Math.abs(indice1 - indice2)

    while (diferencia--){
        d = calculo(d);
    }

    return `${d} ${sufijo}`

}

const askUser = () => {

    let input = Number(window.prompt("Dame la medida"))
    let valorInicial = window.prompt("Esta media es en?")
    let valorFinal = window.prompt("Y quieres que sea?")
    let tipo = valorInicial[valorInicial.length - 1]

    document.write(convertirMedida(input, valorInicial, valorFinal, tipo))
}