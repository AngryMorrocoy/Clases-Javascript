
function reducirpeso(peso, tipo){
    let sufijos = [
        "mg", "cg", "dg", "g", "dag", "hg", "kg"
    ]

    let inicio = sufijos.indexOf(tipo)
 
    if (inicio == 6) {
        return `${peso} ${sufijos[inicio]}`
    }

    let sufijo 

    for (let i = inicio; i < sufijos.length; i++){
        if (peso >= 10){
            peso /= 10
        }

        else {
            sufijo = sufijos[i]
            break;
        }
    }

    return `${peso} ${sufijo}`
}
