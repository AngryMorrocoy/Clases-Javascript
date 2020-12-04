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

function getType(id){
  let options = document.getElementById(id);

  let type;

  for (let i = 0; i < options.length; i++){
    if (options[i].selected){
      type = options[i].value;
      break;
    }
  }
  return type;
}

function calculate(){
  let data = document.getElementById('user-input').value;

  let type = getType('unidad')
  let from = getType('desde')
  let to = getType('hacia')

  document.getElementById('result').textContent = convertirMedida(data, from, to, type);

}

function clearOptions(id){
  let node = document.getElementById(id)
  let childrens = node.children;
  for (let i = childrens.length - 1; i >= 0; i--){
      childrens[i].remove()
  }
}

function updateOptions(){
  const type = getType('unidad');
  clearOptions('desde')
  clearOptions('hacia')

  let prefixes = [
    `m${type}`,
    `c${type}`,
    `d${type}`,
    `${type}`,
    `da${type}`,
    `h${type}`,
    `k${type}`
  ];

  let from = document.getElementById('desde')
  let to = document.getElementById('hacia')

  for (let i = 0; i < prefixes.length; i++){
    let child = document.createElement('option')
    child.text = prefixes[i];
    child.onclick = calculate

    to.appendChild(child)

    child = document.createElement('option')
    child.text = prefixes[i]
    child.onclick = calculate

    from.appendChild(child)
  }

  calculate()

}
