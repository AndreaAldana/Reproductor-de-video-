console.log("Hello Typescript")
//Boolean
const muted = true;
//números
let numerador = 42
let denominador = 6
let resultado = numerador / denominador;

//Arreglos

let people: string[] = [];
people = ['Isabel', 'Nicole', 'Juan']

//Arreglo de string y numeros
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ricardo')
peopleAndNumbers.push(1)

//Enum

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

//Asignar valor de objeto a variable
let colorFav: Color = Color.Rojo
console.log(colorFav)

//Any

let comodin: any = "Joker"
comodin = { type: "wild" }

//Object
let someObj: object = { type: 'wild' }