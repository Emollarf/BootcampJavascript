// Dado el siguiente array de personas:
//const personas = [{ nombre: 'Juan', edad: 18 },{ nombre: 'María', edad: 16 }, { nombre: 'Pedro', edad: 20 },{ nombre: 'Pablo', edad: 15 },{nombre: 'Laura', edad: 19 },];
// Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
//Dime cual es la persona más joven del array.
// Dime cual es la persona más mayor del array.

const personas = [


    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
  ];
  
  // Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
  
  function mayoriaDeEdAD(listaPersonas,){
      for (const persona of listaPersonas) {
          if(persona.edad >= 18){ 
              console.log(persona.nombre)
          }  
      }
  }
  
  mayoriaDeEdAD(personas)
  
  mayoriaDeEdadArrow = listaPersonas => { 
      for (const persona of listaPersonas) {
          if(persona.edad >= 18){ 
              console.log(persona.nombre)
          }
      }
  }
  
  mayoriaDeEdadArrow(personas)
  
  //  Dime cual es la persona más joven del array.
  
  
  
  function masJoven(listaPersonas1,){
    let min= listaPersonas1[0];
    for (i=0; listaPersonas1.length - 1; i++){
          if(listaPersonas1[i].edad < min.edad){ 
            min= listaPersonas1[i];
          }  
      }
      return min;
  }
  console.log (masJoven(personas))
