// Crea una función que reciba un array de strings y devuelva un array con las strings ordenadas alfabéticamente de menor a mayor.

const strings = ['a', 'b', 'c', 'A', 'B', 'C'];
function ordenar (strings){
    return strings.sort()

}

console.log(ordenar(strings))

//Dado el siguiente array de numeros, crea una función que devuelva un array sin los números duplicados.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    function sinDuplicar (numbers) {
        return numbers.filter((valor,indice) => numbers.indexOf(valor) === indice);
 
        }

    console.log (sinDuplicar(numbers))


const sinDuplicar2 = (number) => number.filter((valor, indice) => number.indexOf(valor)=== indice); 

console.log(sinDuplicar2(numbers))

//Dado el siguiente array de objetos, crea una función que devuelva un array sin los objetos duplicados.

const users = [
    {
      name: 'Juan',
      age: 25,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'María',
      age: 30,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pedro',
      age: 20,
      city: 'Madrid',
      hobbies: ['fútbol', 'programar'],
    },
    {
      name: 'Laura',
      age: 35,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pablo',
      age: 27,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'Juan',
      age: 25,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'María',
      age: 30,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pedro',
      age: 20,
      city: 'Madrid',
      hobbies: ['fútbol', 'programar'],
    },
    {
      name: 'Laura',
      age: 35,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pablo',
      age: 35,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
  ];

  function objetosNoDuplicados (personas) {
    return personas.filter((usuariosin, indice) => {
        const personaString = JSON.stringify(usuariosin);
        return (personas.findIndex((usuariosin)=> JSON.stringify(usuariosin)=== personaString)=== indice);
        }
    )
}

  console.log(objetosNoDuplicados(users))


  const sinDuplicados5 = (users) =>
  users.filter((user, index) => {
    const userString = JSON.stringify(user);
    return (
      users.findIndex((user) => JSON.stringify(user) === userString) === index
    );
  });