function revertir(palabra){
  let revertida = "";
  for (let y = palabra.length -1 ; 0 <= y ; y--){
    revertida += palabra[y]
  }
  return revertida;
}

function palindromo(palabra){
  let revertida = ""

  if (revertida == palabra){
    return true 
  } else {
    return false
  }
}

// console.log(palindromo("oson"))
