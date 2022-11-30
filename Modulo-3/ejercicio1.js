//Crea una función que reciba un array de strings y devuelva un array con las strings que empiecen por "a" o "A".

const palabras = [
    "Avion" ,
    "asteristico", 
    "Barco" ,
    "Manzana" , 
]

for (const palabra of palabras) {
    console.log(palabra)

}

palabras.forEach(element => {
    console.log (element)
    
});

 function empiezaA (strings){
    for (const string of palabras){
        if (string[0].toLowerCase() === "a" ) {
            console.log (string)
        }
    }
 }
 empiezaA(palabras)


const filterPalabras = (palabra1) =>
palabra1.filter ((string1) => string1[0].toLowerCase() === "a");

console.log(filterPalabras(palabras)); 




