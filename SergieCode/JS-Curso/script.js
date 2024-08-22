
var nombreDeLaVariable = 'Pedro'
let nombreDeVariable = 'Pedro'
const nombreVariable = 'Pedro'

let x, y, z, a

x = 2
y = 3
z = x + y
a = x //apunta al mismo lugar de memoria

function nomFun() {

}

//Variables

//NUMEROS
let variableNumero = 10
let variableDecimal = 10.12

//TEXTO
let variableTexto = 'Hola mundo'
//TEXTO EN COMILLAS INVERSES
let variableTextoInverso = `Hola mundo ${variableDecimal}` //Permiten texto concatenado con variables
//TEXTO EN COMILLAS DOBLES
let variableTextoDoble = "Hola mundo"

//BOOLEAN
let variableBoolean = true
//BOOLEANO
let variableBooleano = false

//UNFEFINED
let variableUnfined = undefined
//NULL
let variableNull = null
//OBJECT
let variableObject = {
    nombre: 'Pedro',
    edad: 25
}
//ARRAY
let variableArray = [1, 2, 3, 4, 5]

//DATE
let variableDate = new Date().getTime

//PARSE INT
let variableParseInt = parseInt('10')
//PARSE FLOAT
let variableParseFloat = parseFloat('10.12')


//OPERADORES
//OPERADORES ARITMETICOS
let variableSuma = 5 + 5
let variableResta = 5 - 5
let variableMultiplicacion = 5 * 5
let variableDivision = 5 / 5
let variableModulo = 5 % 2
let varibleExponente = 2 ** 2
//OPERADOR DE ASIGNACION
let variableSumaAsignacion = 5
variableSumaAsignacion += 5 //Es lo mismo que hacer 5 + 5
//OPERADORES DE COMPARACION
let variableIgual = 5 == 5 //COMPARA EL VALOR ABSOLUTO
//OPERADORES DE IGUALDAD ESTRITA
let variableIgualEstricto = 5 === 5 // COMPARA TAMBIEN EL TIPO DE DATO
//OPERADOR DE NEGACION
let variableNegacion = !true //Devuelve false
//OPERADOR DE NEGACION DE IGUALDAD
let variableNegacionIgualdad = !(5 == 5) //Devuelve false
//OPERADORES DE IGUALDAD ESTRITA
let variableIgualdadEstricta = !(5 === 5) //Devuelve false
//operadores logicos
let variableAnd = true && true //Devuelve true
let variableOr = true || false //Devuelve true
//OPERADORES MAYOR MENOR O IGUAL QUE
let variableMayorQue = 5 > 3 //Devuelve true
let variableMenorQue = 5 < 3 //Devuelve false
let variableMayorOIGualQue = 5 >= 3 //Devuelve true
let variableMenorOIGualQue = 5 <= 3 //Devuelve false


console.log("Variables:");
console.log("nombreDeLaVariable:", nombreDeLaVariable);
console.log("nombreDeVariable:", nombreDeVariable);
console.log("nombreVariable:", nombreVariable);
console.log("x:", x);
console.log("y:", y);
console.log("z:", z);
console.log("a:", a);

console.log("Variables numéricas:");
console.log("variableNumero:", variableNumero);
console.log("variableDecimal:", variableDecimal);

console.log("Variables de texto:");
console.log("variableTexto:", variableTexto);
console.log("variableTextoInverso:", variableTextoInverso);
console.log("variableTextoDoble:", variableTextoDoble);

console.log("Operadores aritméticos:");
console.log("variableSuma:", variableSuma);
console.log("variableResta:", variableResta);
console.log("variableMultiplicacion:", variableMultiplicacion);
console.log("variableDivision:", variableDivision);
console.log("variableModulo:", variableModulo);
console.log("varibleExponente:", varibleExponente);

console.log("Operadores de asignación:");
console.log("variableSumaAsignacion:", variableSumaAsignacion);

console.log("Operadores de comparación:");
console.log("variableIgual:", variableIgual);
console.log("variableIgualEstricto:", variableIgualEstricto);

function nombreFuncion(x, y) {
    return x + y;
}

//arroy funtion
let nombreFuncio = (x, y) => {
    return x + y;
}

let decirHola = () => console.log("Hola")


console.log(nombreFuncion('2', '1'))

decirHola()


//Objetos
let persona = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
        calle: 'Calle 1',
        ciudad: 'Ciudad 1',
    },
    telefono: '123456',
}
console.log(persona.direccion.calle);
console.log(persona);

//OBJETO VENDEDOR
let vendedor = {
    nombre: 'Juan',
    edad: 30,
    telefono: '123456',
    vender: function () {
        console.log('Vendiendo productos')
    },
    nombreCompleto: function getNombre() {
        return this.nombre
    }
}

vendedor.vender()
console.log(vendedor.nombreCompleto())

/*
function mostrar() {
    document.getElementById('seleccionable').innerHTML = Date()
}
*/

//STRINGS
let texto = 'Hola mundo';
let texto2 = 'Hola mundo'
console.log(texto.length)
console.log(texto[0])
console.log(texto)
console.log(texto2)

texto = texto.slice(2, 8)

texto2 = texto2.replace('mundo', 'diego');
console.log(texto)
console.log(texto2)

texto2 = texto2.toUpperCase()
console.log(texto2)


// Ejemplo de string
let ejemplo = "Hola ,Mundo!";

// 1. Obtener la longitud de un string
let longitud = ejemplo.length;
console.log("Longitud del string:", longitud); // 12

// 2. Acceder a un carácter en una posición específica
let caracterEnPosicion5 = ejemplo.charAt(2);
console.log("Carácter en la posición 5:", caracterEnPosicion5); // ,

// 3. Convertir a mayúsculas
let mayusculas = ejemplo.toUpperCase();
console.log("En mayúsculas:", mayusculas); // HOLA, MUNDO!

// 4. Convertir a minúsculas
let minusculas = ejemplo.toLowerCase();
console.log("En minúsculas:", minusculas); // hola, mundo!

// 5. Encontrar la posición de un substring
let posicionMundo = ejemplo.indexOf("Mundo");
console.log("Posición de 'Mundo':", posicionMundo); // 6

// 6. Extraer un substring
let substring = ejemplo.substring(6, 11);
console.log("Substring de la posición 6 a la 11:", substring); // Mundo

// 7. Extraer una sección de un string usando slice
let seccion = ejemplo.slice(6, 11);
console.log("Sección extraída usando slice:", seccion); // Mundo

// 8. Reemplazar parte del string
let reemplazo = ejemplo.replace("Mundo", "JavaScript");
console.log("Reemplazo de 'Mundo' por 'JavaScript':", reemplazo); // Hola, JavaScript!

// 9. Dividir un string en un array
let palabras = ejemplo.split(" ");
console.log("String dividido en palabras:", palabras); // ["Hola,", "Mundo!"]

// 10. Eliminar espacios en blanco al inicio y al final
let stringConEspacios = "   Hola, Mundo!   ";
let sinEspacios = stringConEspacios.trim();
console.log("Sin espacios al inicio y al final:", `'${sinEspacios}'`); // 'Hola, Mundo!'

// 11. Comprobar si un string contiene otro string
let contieneHola = ejemplo.includes("Hola");
console.log("Contiene 'Hola':", contieneHola); // true

// 12. Concatenar strings
let saludo = "Hola";
let nombre = "Carlos";
let saludoCompleto = saludo.concat(", ", nombre, "!");
console.log("String concatenado:", saludoCompleto); // Hola, Carlos!

// 13. Repetir un string varias veces
let repetido = "Hola".repeat(3);
console.log("String repetido tres veces:", repetido); // HolaHolaHola

// 14. Convertir la primera letra de cada palabra a mayúsculas
let ejemplo2 = "hola mundo desde javascript";
let aMayusculas = ejemplo2.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
console.log("Primera letra de cada palabra en mayúsculas:", aMayusculas); // Hola Mundo Desde Javascript

// 15. Convertir la primera letra de cada palabra a minúsculas
let ejemplo3 = "Hola Mundo Desde JavaScript";
let aMinusculas = ejemplo3.split(' ').map(palabra => palabra.charAt(0).toLowerCase() + palabra.slice(1)).join(' ');
console.log("Primera letra de cada palabra en minúsculas:", aMinusculas); // hola mundo desde javaScript


//Arrays - Lists
// 1. Crear un array vacío
let vacio = [];
console.log("Array vacío:", vacio); // []
// 2. Crear un array con elements
let elements = [1, 2, 3, 4, 5];
console.log("Array con elements:", elements); // [1, 2, 3,
// 3. Acceder a un elemento del array
let acceso = elements[0];
console.log("Elemento del array:", acceso); // 1
// 4. Agregar un elemento al final del array
elements.push(6);
console.log("Elemento agregado al final:", elements); // [1, 2,

// 5. Agregar un elemento al inicio del array
elements.unshift(0);
console.log("Elemento agregado al inicio:", elements); // [0, 1,
// 6. Eliminar el último elemento del array
elements.pop();
console.log("Último elemento eliminado:", elements); // [0, 1,
// 7. Eliminar el primer elemento del array
elements.shift();
console.log("Primer elemento eliminado:", elements); // [1, 2,
// 8. Buscar un elemento en el array
let busqueda = elements.indexOf(3);
console.log("Índice del elemento:", busqueda); // 2
// 9. Reemplazar un elemento en el array
elements[1] = 10;
console.log("Elemento reemplazado:", elements); // [1, 10,
// 10. Eliminar un elemento del array
elements.splice(1, 1);
console.log("Elemento eliminado:", elements); // [1, 3, 4,
// 11. Agregar varios elements al final del array
elements.push(...[5, 6, 7]);
console.log("elements agregados al final:", elements); // [1, 3,
// 12. Agregar varios elements al inicio del array
elements.unshift(...[0, 1, 2]);
console.log("elements agregados al inicio:", elements); // [0, 1,
// 13. Eliminar varios elements del array
elements.splice(1, 3);
console.log("elements eliminados:", elements); // [0, 4, 5,
// 14. Crear un array con un rango de números
let rango = Array.from({ length: 5 }, (_, i) => i + 1)
console.log("Array con rango:", rango); // [1, 2, 3
//Array funtion filter
// 1. Filtrar elementos en un array
let filter = [1, 2, 3, 4, 5].filter((
    elemento) => elemento % 2 === 0
);
console.log("Filtrado:", filter); // [2, 4]
//Array function map
// 1. Mapear elementos en un array
let map = [1, 2, 3, 4, 5].map((
    elemento) => elemento * 2
);
console.log("Mapeado:", map); // [2, 4, 6,
//Array function reduce
// 1. Reducir elementos en un array
let reduce = [1, 2, 3, 4, 5].reduce((
    acumulador, elemento) => acumulador + elemento, 0);
console.log("Reducido:", reduce); // 15

//Join
// 1. Unir elementos de un array en una cadena
let join = [1, 2, 3, 4, 5].join("-");
console.log("Unido:", join); // "1-2-3-4-5"
// 2. Unir elementos de un array en una cadena con un separador
let join2 = [1, 2, 3, 4, 5].
    join("-");
console.log("Unido con separador:", join2); // "1-2-3

//Sort
// 1. Ordenar elementos de un array en orden ascendente
let sort = [5, 2, 8, 1, 9].sort((
    a, b) => a - b)
console.log("Ordenado ascendente:", sort); // [1, 2, 5,
// 2. Ordenar elementos de un array en orden descendente
let sort2 = [5, 2, 8, 1, 9].sort((a, b) => b - a)
console.log("Ordenado descendente:", sort2); // [9, 8, 5

//Date
// 1. Crear una fecha
let fecha = new Date("2024-03-08T10:30:00");
console.log("Fecha:", fecha); // Fri Mar 08 2024 10:30:
// 2. Obtener la fecha actual
let fechaActual = new Date();
console.log("Fecha actual:", fechaActual); // Fri Mar 08 2024 10:
// 3. Obtener la hora actual
let horaActual = new Date().getHours();
console.log("Hora actual:", horaActual); // 10
//set date
// 1. Establecer la fecha
fecha = new Date("2024-03-08T10:30:00")
// 2. Establecer la hora
let hora = new Date().setHours(12, 30, 0, 0);

//Math
// 1. Redondear un número hacia arriba
let redondear = Math.ceil(3.7);
console.log("Redondeado hacia arriba:", redondear); // 4
// 2. Redondear un número hacia abajo
let redondear2 = Math.floor(3.7);
console.log("Redondeado hacia abajo:", redondear2); // 3
//pi
let pi = Math.PI;
console.log("Pi:", pi); // 3.141592653589793
//e
let e = Math.E;
console.log("E:", e); // 2.718281828459045
//round
// 1. Redondear un número hacia arriba
let redondear3 = Math.round(3.7);
console.log("Redondeado hacia arriba:", redondear3); // 4
//trunc
// 1. Redondear un número hacia abajo
let trunc = Math.trunc(3.7);
console.log("Redondeado hacia abajo:", trunc); // 3
//random
// 1. Generar un número aleatorio entre 0 y 1
let random = Math.random();
console.log("Número aleatorio:", random); // 0.12345678901234567

//Condicionales
// 1. Si la variable es verdadera, ejecuta el código
if (true) {
    console.log("La variable es verdadera");
} else {
    console.log("La variable es falsa");
}
// 2. Si la variable es falsa, ejecuta el código
if (false) {
    console.log("La variable es verdadera");
} else {
    console.log("La variable es falsa");
}
// 3. Si la variable es igual a un valor, ejecuta el código
if (5 === 5) {
    console.log("La variable es igual a 5");
} else {
    console.log("La variable no es igual a 5");
}

//switch
// 1. Evaluar la variable y ejecutar el código correspondiente
switch (true) {
    case true:
        console.log("La variable es verdadera");
        break;
    case false:
        console.log("La variable es falsa");
        break;
    default:
        console.log("La variable no es verdadera ni falsa");
}

// Bucles
// 1. Ejecutar el código mientras la condición sea verdadera
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// 2. Ejecutar el código mientras la condición sea verdadera
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
// 3. Ejecutar el código para cada elemento en un arreglo
let frutas = ["manzana", "plátano", "naranja"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// for each
// 1. Ejecutar el código para cada elemento en un arreglo
let frutas2 = ["manzana", "plátano", "naranja"];
frutas2.forEach(element => {
    console.log(element);
});

// for of 
// 1. Ejecutar el código para cada elemento en un arreglo
let frutas3 = ["manzana", "plátano", "naranja"];
for (let fruta of frutas3) {
    console.log(fruta);
}

const alumno = {
    nombre: "Juan",
    edad: 20,
    curso: "Primero",
    tecnologias: ['HTML', 'CSS']
}

for (const key in alumno) {
    if (alumno.hasOwnProperty(key)) {
        console.log(`${key}: ${alumno[key]}`);
    }
}

// set 
// 1. Crear un conjunto
const colores = new Set(['amarillo', 'morado', 'azul']);
colores.add("rojo");
colores.add("azul");
console.log(colores)
// 2. Verificar si un elemento está en el conjunto
console.log(colores.has("rojo"));

// map
// 1. Crear un mapa
let mapaPersona = new Map([
    ["nombre", "Juan"],
    ["edad", 20],
    ["curso", "Primero"]
])
// 2. Agregar un elemento al mapa
mapaPersona.set("talla", "1.80");
console.log(mapaPersona);
// 3. Obtener un elemento del mapa
console.log(mapaPersona.get("edad"));

// set to array
const set = new Set([1, 2, 3, 4, 5]);
const array = Array.from(set);

// type of
console.log(typeof 10); // number
console.log(typeof "hola"); // string


//type of array y object
console.log(typeof [1, 2, 3]); // object
console.log(typeof { a: 1, b: 2 }); // object


// intanceoff
// 1. Verificar si un objeto es de un tipo específico
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Estudiante extends Persona {

    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
}
let estudiante = new Estudiante("Juan", 20, "Primero");
console.log(estudiante instanceof Persona); // true

console.log(estudiante instanceof Estudiante); // true

// string to number

const string = "10";
const number = Number(string);
console.log(number); // 10

// number to string
const number2 = 10;
const string2 = String(number2);
console.log(string2); // "10"

// to string
const objeto = { a: 1, b: 2 };
const string3 = JSON.stringify(objeto);
console.log(string3); // "{"a":1,"b":2}"

// numero a string con funcion to string
const number3 = 10;
const string4 = number3.toString();
console.log(string4); // "10"

// date a string
const fecha2 = new Date();
const string5 = fecha2.toISOString();
console.log(string5); // "2023-03-15T14:30:00.}

const fechaActual2 = new Date()
let stringFechaActual2 = String(fechaActual2)
console.log(stringFechaActual2); // "Wed Mar 15 2023 14:30

// string a date
const string6 = "2023-03-15T14:30:00.000Z"

const fecha3 = new Date(string6);
console.log(fecha3); // Wed Mar 15 2023 14:30:00

//number  to boolean
const number4 = 0;
const boolean = Boolean(number4);
console.log(boolean)



//regex
const texto4 = "Hola soy un texto con una palabra que se repite";
const patron = /palabra/gi;
const coincidencias = texto4.match(patron);
console.log(coincidencias); // ["palabra", "palabra"]

// try-catch
try {
    let x = 1 / 0
} catch (error) {
    console.log(error);
}
finally {
    console.log("Se ejecuta siempre");
}

// callbacks
function mostrarConsola(num) {
    console.log(num)
}

function calcular(num1, num2, callback) {
    const resultado = num1 + num2
    callback(resultado)
}

calcular(1, 2, mostrarConsola)

//Promesas
let promesa = new Promise((response, reject) => {
    let resp = 'Esta es la respuesta del servicio'
    response(resp)
    reject('Fallo')
})

promesa.then(res => {
    console.log(res)
}).catch(error => {
    console.error(error)
})