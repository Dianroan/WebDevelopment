let numeroAzar = Math.floor(Math.random() * 100) + 1

let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

function chequearResultado() {
    intentos += 1
    intento.textContent = "Numero de intentos: " + intentos
    let numeroEntrada = parseInt(document.getElementById('numeroEntrada').value)
    if (numeroEntrada < 1 || numeroEntrada > 100 || isNaN(numeroEntrada)) {
        mensaje.textContent = 'Por favor introduce un numero entre 1 y 100';
        return
    }
    else if (numeroAzar == numeroEntrada) {
        mensaje.textContent = 'Ganaste el numero era ' + numeroAzar;
        numeroAzar = Math.floor(Math.random() * 100) + 1
    }
    else if (numeroEntrada < numeroAzar) {
        mensaje.textContent = 'El numero es mayor, intenta de nuevo';
    }
    else if (numeroEntrada > numeroAzar) {
        mensaje.textContent = 'El numero es menor, intenta de nuevo';
    }
    else {
        mensaje.textContent = 'Perdiste, el numero era ' + numeroAzar;
    }
}