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


//funciones
function add(a: number, b: number): number {
    return a + b
}

const sum = add(2, 6)

//funciones que regresan funciones

function createAdder(a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(5)
const fourPlus6 = addFour(6)

//EL ? hace que el argumento sea undefined, o sea, puede omitirse
function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`
}

const richard = fullName('Richard')

//Creando interface

//EL ? volverá esa propiedad opcional por lo que rect puede omitirlo
interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6
}

function area(r: Rectangulo) {
    return r.alto * r.ancho;
}

const areaR = area(rect)
console.log(areaR)

rect.toString = function () {
    return this.color ? `Un rectágulo ${this.color}` : "No existe"
}

console.log(rect.toString())