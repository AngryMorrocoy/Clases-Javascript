
function minimarDistancia(distancia, tipo){  // Distancia inicial = mm
  let longitudes = [
    "mm", "cm", "dm", "m", "dam", "hm", "km"
  ];

  let inicio = longitudes.indexOf(tipo)

  if (inicio == 6){
    return `${distancia} km`
  }

  let sufijo;

  for (let i = inicio; i < longitudes.length; i++){
    sufijo = longitudes[i]
    if (distancia < 10){
      break;
    }
    distancia /= 10
  }

  return `${distancia} ${sufijo}`
}

const d = 156732

let x = minimarDistancia(d, "km");

console.log(`${d} -> ${x}`)
