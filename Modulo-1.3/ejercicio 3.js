///Crea una función que permita comprobar si un string es un palíndromo.
//Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
//Ahora haz la misma comprobación pero con un array de strings.



function palindromo (str){
    let string= str.toLowerCase().split(" ").join("");
    for (i=0; i<string.length/2; i++ ){
        if (string[i] !== string[string.length-1-i]){
            console.log ("no palindromo");
            return;
        }
    }
    console.log(string);
} 

palindromo ("anita lava la tina")


//Ahora haz la misma comprobación pero con un array de strings.


const arrayPalindromo = ['anita lava la tina', 'anita lava la tinaa'];

let esPalindromoArray = (arrayToCheck) => {
const arraySinEspacios = arrayPalindromo.map((string2)=> string2.toLowerCase().split(" ").join("")
);

const arrayAlreves= arraySinEspacios.map((string2)=>string2.split(" ").reverse().join("")
);
return arraySinEspacios.map ((string, index)=>{
    return {string: arrayToCheck,
            esPalindromo: string === arrayAlreves[index], 
    };
});
}

console.log(esPalindromoArray (arrayPalindromo));
