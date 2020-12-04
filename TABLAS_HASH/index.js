function cuentaCaracteres(palabra){
  // ALETEAR
  let cuentas = {};
  for (let caracter of palabra){
    if (!cuentas.hasOwnProperty(caracter)){
      cuentas[caracter] = 0;
    }
    cuentas[caracter]++;
  }
  return cuentas
}


function obtenerCaracterConcurrido(palabra){
  const cuentas = cuentaCaracteres(palabra)

  let maximo = 0;
  let char = "";

  for (let caracter of palabra){
    if (cuentas[caracter] > maximo){
      maximo = cuentas[caracter];
      char = caracter;
    }
  }

  return [char, maximo];
}


let muros = {
  ARRIBA: [true, () => console.log("Muro superior existe"), () => console.log("Muro superior no existe")],
  ABAJO: [true, () => console.log("Muro inferior existe"), () => console.log("Muro inferior no existe")],
  DERECHA: [true, () => console.log("Muro derecho existe"), () => console.log("Muro derecho no existe")],
  IZQUIERDA: [true, () => console.log("Muro izquierdo existe"), () => console.log("Muro izquierdo no existe")],
}

for (let propiedad of Object.getOwnPropertyNames(muros)){
  if (muros[propiedad][0]){
    muros[propiedad][1]();
  } else {
    muros[propiedad][2]();
  }
}
