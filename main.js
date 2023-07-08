const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intentos = 0;
let adivinado = false;

while (!adivinado) {

    const numeroUsuario = parseInt(prompt("Adivina el número:"));


    if (isNaN(numeroUsuario)) {
    alert("Debes ingresar un número válido. Intenta nuevamente.");
    continue;
    }

    intentos++;


    if (numeroUsuario === numeroSecreto) {
    alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
    adivinado = true;
    } else if (numeroUsuario < numeroSecreto) {
    alert("El número ingresado es menor al número secreto. Intenta nuevamente.");
    } else {
    alert("El número ingresado es mayor al número secreto. Intenta nuevamente.");
    }
}