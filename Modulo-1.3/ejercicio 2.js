
//Escribe un programa que permita a alguien adivinar un PIN de 4 dígitos exactamente 3 veces. 
//Si el usuario adivina el número correctamente, imprime "¡Eso fue correcto!" De lo contrario, imprimirá "Lo siento, eso estaba mal." El programa se detiene después del 4º intento o si lo adivinaron correctamente.Puedes usar este código para obtener el PIN de entrada del usuario:
//const pin = prompt('Introduce el PIN:');

//pin 1234


let pincorrecto= "1234"
let pin = prompt('Introduce el PIN:');
let intentos = 0
while (intentos < 2) { 
    if (pincorrecto === pin){
    console.log ("¡Eso fue correcto!");
    break;
    } else {
    console.log ("Lo siento, eso estaba mal.");
    intentos++;
    pin = prompt(`Te queda ${3-intentos} intentos:`);
    }
}
//Haz el mismo ejercicio pero ahora el usuario tiene intentos infinitos hasta que acierte el PIN o escriba `salir`.

let pincorrecto2 = "1234"
let pin2 = prompt('Introduce el PIN:')
let intentos2 = 0

while (pin2 !== "Salir"){
    if (pincorrecto2 === pin2){
        console.log ("¡Eso fue correcto!");
        break;
    } else {
        console.log ("Lo siento, eso estaba mal.");
        pin = prompt ("Introduce nuevo el pin o escriba salir");
    }
}