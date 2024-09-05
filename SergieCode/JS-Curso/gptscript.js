
// Uso de var, let, y const
var nombreAntiguo = 'Pedro';  // Puede ser reasignada y tiene alcance global o de función.
let nombreTemporal = 'Pedro'; // Puede ser reasignada y tiene alcance de bloque.
const nombreFijo = 'Pedro';   // No puede ser reasignada y tiene alcance de bloque.

// Declaración múltiple de variables
let primerNumero, segundoNumero, suma, copiaNumero;
primerNumero = 2;
segundoNumero = 3;
suma = primerNumero + segundoNumero;
copiaNumero = primerNumero;  // Apunta al mismo valor

let numeroEntero = 10;
let numeroDecimal = 10.12;

let saludo = 'Hola mundo';
let saludoInterpolado = `Hola mundo ${numeroDecimal}`;
let saludoDobleComillas = "Hola mundo";


let esVerdadero = true;
let esFalso = false;


let valorIndefinido = undefined;
let valorNulo = null;


let persona = {
    nombre: 'Pedro',
    edad: 25
};

let numerosEjemplo = [1, 2, 3, 4, 5];

let fechaActual = new Date();
let timestamp = new Date().getTime();

let sumaEjemplo = 5 + 5;
let resta = 5 - 5;
let multiplicacion = 5 * 5;
let division = 5 / 5;
let modulo = 5 % 2;
let exponente = 2 ** 2;

let valorAsignado = 5;
valorAsignado += 5;  // Equivalente a valorAsignado = valorAsignado + 5

let esIgual = 5 == 5;             // Compara solo el valor
let esIgualEstricto = 5 === 5;    // Compara valor y tipo
let esDiferente = 5 != 4;
let esDiferenteEstricto = 5 !== '5';

let yLogico = true && false;  // false
let oLogico = true || false;  // true
let negacion = !true;         // false


let mayorQue = 5 > 3;           // true
let menorQue = 3 < 5;           // true
let mayorOIgual = 5 >= 5;       // true
let menorOIgual = 3 <= 5;       // true


if (esVerdadero) {
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}

switch (valorAsignado) {
    case 10:
        console.log("El valor es 10");
        break;
    default:
        console.log("Otro valor");
}

let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let frutas = ["manzana", "plátano", "naranja"];
frutas.forEach(fruta => console.log(fruta));

function sumarNumeros(a, b) {
    return a + b;
}

let sumar = (a, b) => a + b;
let saludar = () => console.log("Hola");


let texto = 'Hola, Mundo!';
let longitud = texto.length;
let mayusculas = texto.toUpperCase();
let posicion = texto.indexOf('Mundo');
let reemplazo = texto.replace('Mundo', 'JavaScript');

let numeros = [1, 2, 3, 4, 5];
let filtrados = numeros.filter(num => num % 2 === 0);
let mapeados = numeros.map(num => num * 2);
let sumaTotal = numeros.reduce((acc, num) => acc + num, 0);

let empleado = {
    nombre: 'Juan',
    edad: 30,
    saludar: function () {
        console.log('Hola, soy ' + this.nombre);
    }
};
empleado.saludar();

let fecha = new Date();
let redondeoSuperior = Math.ceil(2.3);
let redondeoInferior = Math.floor(2.7);
let numeroAleatorio = Math.random();

try {
    let division = 1 / 0;
} catch (error) {
    console.log(error);
} finally {
    console.log("Bloque finally siempre se ejecuta.");
}

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

let numero = Number("10");
let texto2 = String(10);
let booleano = Boolean(0);

let texto3 = "Hola, soy un texto con palabra.";
let regex = /palabra/gi;
let coincidencias = texto.match(regex);


function procesarDato(numero, callback) {
    let resultado = numero * 2;
    callback(resultado);
}

procesarDato(5, function (resultado) {
    console.log("Resultado:", resultado);
});

// PROMESAS

// 1. Crear una promesa que se resuelve
let promesaResuelta = new Promise((resolve, reject) => {
    resolve("Promesa resuelta correctamente");
});

promesaResuelta.then((mensaje) => {
    console.log(mensaje); // "Promesa resuelta correctamente"
});

// 2. Crear una promesa que se rechaza
let promesaRechazada = new Promise((resolve, reject) => {
    reject("Promesa rechazada con un error");
});

promesaRechazada.catch((error) => {
    console.error(error); // "Promesa rechazada con un error"
});

// 3. Crear una promesa que se resuelve o rechaza basado en una condición
let promesaCondicional = new Promise((resolve, reject) => {
    let exito = true; // Cambia a false para probar el rechazo
    if (exito) {
        resolve("La operación fue exitosa");
    } else {
        reject("Hubo un error en la operación");
    }
});

promesaCondicional
    .then((mensaje) => {
        console.log(mensaje); // "La operación fue exitosa" (si exito es true)
    })
    .catch((error) => {
        console.error(error); // "Hubo un error en la operación" (si exito es false)
    });

// 4. Usar .finally() para ejecutar código después de que la promesa se resuelva o rechace
let promesaConFinally = new Promise((resolve, reject) => {
    let exito = true;
    if (exito) {
        resolve("Operación exitosa");
    } else {
        reject("Operación fallida");
    }
});

promesaConFinally
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Esto se ejecuta siempre, independientemente del resultado de la promesa");
    });

// 5. Promesas encadenadas
let promesaEncadenada = new Promise((resolve, reject) => {
    resolve(2);
});

promesaEncadenada
    .then((numero) => {
        return numero * 2; // 4
    })
    .then((numero) => {
        return numero * 3; // 12
    })
    .then((numero) => {
        console.log("Resultado final:", numero); // 12
    });

// 6. Ejecutar varias promesas en paralelo con Promise.all
let promesa1 = new Promise((resolve) => setTimeout(resolve, 1000, "Promesa 1 completada"));
let promesa2 = new Promise((resolve) => setTimeout(resolve, 500, "Promesa 2 completada"));
let promesa3 = new Promise((resolve) => setTimeout(resolve, 1500, "Promesa 3 completada"));

Promise.all([promesa1, promesa2, promesa3]).then((resultados) => {
    console.log(resultados); // ["Promesa 1 completada", "Promesa 2 completada", "Promesa 3 completada"]
});

// 7. Ejecutar varias promesas y obtener el primer resultado con Promise.race
Promise.race([promesa1, promesa2, promesa3]).then((resultado) => {
    console.log("Primera promesa en resolverse:", resultado); // "Promesa 2 completada"
});
