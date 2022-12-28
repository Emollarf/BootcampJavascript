// Ejercicio 1

// Muestra en la consola el texto de cada uno de los párrafos.
const textoParrafo = document.getElementsByTagName('p')
for ( const parrafo of textoParrafo)
console.log(parrafo.textContent)

const parrafo = document.querySelectorAll('p')

parrafo.forEach((parragraf)=> { console.log(parragraf.textContent)})

for ( let i=0; i<textoParrafo.length; i++){
    console.log(textoParrafo[i].textContent)

}

//Muestra en la consola el texto de cada uno de los párrafos que tengan la clase parrafo.
const claseParrafo = document.querySelectorAll('.parrafo')
for (let i =0; i< claseParrafo.length; i++){
    console.log (claseParrafo[i].textContent)
}

claseParrafo.forEach((parrafo)=>{console.log(parrafo.textContent)})

for (const parrafo of claseParrafo){
    console.log (parrafo.textContent)
}
//Modifica el texto de cada uno de los párrafos que tengan la clase parrafo por "Hola Mundo".

for ( let i =0; i< claseParrafo.length; i++){
    claseParrafo[i].textContent = 'Hola Mundo'
}

claseParrafo.forEach ((parrafo)=> { parrafo.textContent = 'Hola Mundo'})


// Cambia el color de fondo de cada uno de los párrafos que tengan la clase parrafo por red.
 
    for (let i = 0; i < claseParrafo.length; i++) {
        claseParrafo[i].style.backgroundColor = 'red';}

claseParrafo.forEach((parrafo)=>{parrafo.style.backgroundColor ='red'})


for (const parrafo of claseParrafo ) {
    parrafo.style.cssText = 'background-color : red;'
}


//  Añade un span con el texto "Infiltrado" al final de cada uno de los párrafos que tengan la clase parrafo.

const parrafos = document.querySelectorAll("p")

for (const p of parrafos){
    if (p.hasAttribute("class")){
        const span = document.createElement ("span");
        span.textContent = '  Infiltrado';
        p.appendChild(span);
    }
}

