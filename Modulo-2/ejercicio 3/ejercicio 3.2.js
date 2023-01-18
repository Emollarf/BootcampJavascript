// Software para aprender mecanografía.
//Tendrás un párrafo con un texto largo que el usuario deberá escribir.
//Deberás controlar que el usuario escriba el texto correctamente y por cada letra que escriba bien, deberás pintarla de verde en el párrafo.
// Crea los elementos de HTML que necesites, así como los estilos de CSS y por supuesto el código JavaScript.
//Como consejo te diré que empieces por lo básico y vayas añadiendo funcionalidades poco a poco. Cuando lo acabes puedes añadir extras como temporizador, contador de errores y por supuesto carga de palabras dinámica desde un array.

const p = document.querySelector('p');
const textoEscribir = document.querySelector('.textoEscribir')
const textoUsuario = document.querySelector('.textoUsuario');
const form = document.querySelector('form');
const input = document.querySelector('input')
const boton = document.querySelector('.nuevaPalabra')

function randomFuncion (){
    const fraseRandom = [
        'Hola caracola',
        'Esto es una prueba',
        'He perdido mucho tiempo por la culpa del defer',
        'No puede faltar la palabra cacatua',
    ];
    const randomIndice = Math.floor(Math.random()*fraseRandom.length);
    return fraseRandom[randomIndice]
}

const textoEscribirValor = textoEscribir.textContent
const random = randomFuncion()
textoEscribir.textContent = random

form.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    nuevo() 

    const textoEscritoUsuario = input.value
    const cadenaAEscribirV = textoEscribir.textContent.split('');
    const cadenaUsuarioV = textoEscritoUsuario.split('');
    corregirTexto(cadenaAEscribirV, cadenaUsuarioV)

   form.reset(); 

function corregirTexto (cadenaEscribir, cadenaUsuario){
    const fragment = document.createDocumentFragment();
    cadenaEscribir.forEach((letra, indice )=> {
    let span = document.createElement('span');
    span.textContent = cadenaUsuario[indice];
    if(letra === cadenaUsuario[indice]){
        span.classList.add('correcto');
    } else {
        span.classList.add('incorrecto');
    }
    fragment.append(span);
})
textoUsuario.append(fragment);
}
});

boton.addEventListener('click', (evento) => {
    nuevo();
    nuevoTextoEscribir()
    })

function nuevo (){
    textoUsuario.textContent = ''
}

function nuevoTextoEscribir (){
    textoEscribir.textContent =''
    const nuevoRandom = randomFuncion()
    textoEscribir.textContent = nuevoRandom
}

window.onload = init;
function init (){
    document.querySelector('.start').addEventListener('click', cronometrar);
    document.querySelector('.stop').addEventListener('click', parar);
    document.querySelector('.reiniciar').addEventListener('click', reiniciar);
    h=0;
    m=0;
    s=0;
    document.getElementById('hms').innterHTML = "00:00:00";
}
function cronometrar (){
    textoEscribir();
    id = setInterval (escribir, 1000);
    document.querySelector('.start').removeEventListener('click', cronometrar)   
}

function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++; s=0;}
    if (m>59){h++; m=0;}
    if (h>24){h=0;}

    if(s<10){sAux='0'+s;}else {sAux=s;}
    if(m<10){mAux='0'+m;}else{mAux=m;}
    if(h<10){hAux='0'+h;}else{hAux=h;}

    document.getElementById('hms').innterHTML= hAux+ ':' + mAux +':' + sAux ;
}

function parar (){
    clearInterval(id);
    document.querySelector('.start').addEventListener ('click', cronometrar);
}

function reiniciar  (){
    clearInterval(id);
    document.getElementById('hms').innerHTML= '00:00:00'
    h=0; m=0; s=0;
    document.querySelector('.start').addEventListener('click', cronometrar);
    
}