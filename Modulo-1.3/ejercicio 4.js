/**
 *Crea una función que reciba un array de nombres que le han dado like a una foto, e indica por consola quien ha dado like. En los siguientes formatos:
 * 
 * Si nadie ha dado like
 const likes = [];
 
 'Nadie ha dado like'
 
 * Si solo ha dado like una persona
  const likes = ['Juan'];
  'Juan ha dado like'
 * Si han dado like dos personas
  const likes = ['Juan', 'María'];
  'Juan y María han dado like'
 * Si han dado like tres personas
  const likes = ['Juan', 'María', 'Pedro'];
 'Juan, María y Pedro han dado like'
 * Si han dado like más de tres personas
  const likes = ['Juan', 'María', 'Pedro', 'Pablo', 'Laura'];
  'Juan, María y 3 personas más han dado like'
  *
  */

  function nombresLike (nombres){
    if (nombres.length === 0) {
       return ` no hay likes`
    } else if (nombres.length === 1){
        return `${nombres [0] } ha dado like`
    } else if (nombres.length === 2) {
        return `${nombres [0]} y ${nombres[1]} ha dado likes`
    } else if (nombres.length === 3){
        return `${nombres [0]} ,  ${nombres[1]}, ${nombres[2]} ha dado likes`
    } else {  return `${nombres [0]} ,  ${nombres[1]}, ${nombres[2]} y ${nombres.length - 2} personas ham dado like`

    }
}

console.log(nombresLike([]));
console.log(nombresLike(['Juan']));
console.log(nombresLike(['Juan', 'María']));
console.log(nombresLike(['Juan', 'María', 'Pedro']));
console.log(nombresLike(['Juan', 'María', 'Pedro', 'Pablo', 'Laura']));
