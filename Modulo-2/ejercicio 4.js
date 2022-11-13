// Crea una función que reciba un número y muestre por consola si es par o impar.

function parNon (num) {
    if (num%2 == 0){
        console.log( num + "Par")
    } else { console.log (num + " " + "impar")}
    
}
 parNon (Math.random())

 function parNon1 (num) {
    if ( num%2 == 0){
        console.log (num)
        return "par"
    } else { console.log(num)
         return "impar"}
 }
 
 const par = parNon1 (3)
 console.log(par)

 