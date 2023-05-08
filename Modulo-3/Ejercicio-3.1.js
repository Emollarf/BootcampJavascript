
function doble (numero){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(numero%2 == 0){
            resolve (numero * 2)
        }else{
            reject (console.log('El número es impar'))
        }},2000)    
    })
}

doble(2)
    .then((resultado)=>{
    console.log(resultado);
    return resultado;
})
    .then ((resultado2)=>{
    const suma10 = resultado2 + 10;
    console.log(suma10);
    return suma10;
    
})
    .then((resultado3)=>{
    const suma20 = resultado3 + 20;
    console.log(suma20)
    return suma20 ;

})

    .catch((error)=>{ console.log(error)}); 


async function dobleAsync (numero){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(numero%2 == 0){
                resolve (numero*2)
            }else{
                reject (console.log('El número es impar'))
            }
        },2000)     
    })
} 

async function run(){
    try {
        const result = await dobleAsync(2);
        console.log( result);
        const result10 = result + 10;
        console.log(result10);
        const result20 = result10 + 20;
        console.log(result20);
        
    } catch (error) {
        console.log (error)
    }
}

run();