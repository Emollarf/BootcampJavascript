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
  ];

// Crea una función que devuelva un array con los nombres de las personas que viven en Madrid

function usMadrid (usuarios) {
   return usuarios.filter ((usuario) => usuario.city === 'Madrid')
        .map ((usuario) => usuario.name);

} 
console.log(usMadrid(users));

//Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años.

function mayor25 (usuarios1) {
    return usuarios1
    .filter ((usuario1) => usuario1.age > 25 )
    .map((usuario1)=> usuario1.name);
}

console.log (mayor25(users))

// Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años y que vivan en Madrid.

function edadCiudad (usuarios3) {
    return usuarios3
    .filter((usuario3) => usuario3.age > 25 && usuario3.city === 'Madrid')
    .map ((usuario3) => usuario3.name );
}

console.log(edadCiudad(users))

// Encuentra la primera persona que le guste programar.


function programar (usuarios4) {
   return usuarios4.find ((usuario4) => usuario4.hobbies.includes ('programar'));
}

console.log(programar(users))

// Haz la suma de todas las edades de las personas.

function sumaEdades (usuarios5) {
  return usuarios5.reduce((acumulador, user) => acumulador + user.age,0);
}

console.log(sumaEdades(users))

function sumaEdades1 (usuarios6){
  let sum = 0;
  for (let i =0; i <users.length; i++) {
    sum += users [i].age
  }
  return sum
}

console.log(sumaEdades(users))

const sumaEdad3 = (users) =>
 users.reduce ((acc, user) => acc + user.age ,0 )

 console.log(sumaEdad3(users))

 // Crea un nuevo array solo con la ciudad de cada persona y su primer hobby.

 function nuevoArreglo (users){
  return users.map((user) => {
    return {  
      city : user.city,
      hobby: user.hobbies[0],
    };
  });
}
 
 console.log(nuevoArreglo(users))

