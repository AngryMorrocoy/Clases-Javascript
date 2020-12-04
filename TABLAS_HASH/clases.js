class Perro {

  constructor(nombre, raza, tamaño, dueño) {
    this.nombre = nombre;
    this.raza = raza;
    this.tamaño = tamaño;
    this.dueño = dueño;
  }

  ladrar(){
    console.log(`${this.nombre} ha ladrado`)
  }

}

let mi_perro = new Perro("Fifí", "Puddle", 80, "Vivian")
let mi_otro_perro = new Perro("Sultán", "Chihuahua", 30, "Raúl")

console.log(mi_otro_perro.dueño)
