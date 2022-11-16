// Recuerdas el ejercicio de los pokemons? Ahora vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon.


  const pokemons = [
    {
      nombre: 'Squirtle',
      tipo: 'agua',
    },
    {
      nombre: 'Bulbasaur',
      tipo: 'planta',
    },
    {
      nombre: 'Charmander',
      tipo: 'fuego',
    },
  ];
  
function mostrarPokemons(listaPokemons){
    for ( const pokemon of listaPokemons){
        console.log(pokemon.nombre);
    }
}
mostrarPokemons (pokemons);

// También vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon que sea de tipo fuego.

function tipoPokemon(listaPokemons){
    for ( const pokemon of listaPokemons){
        if ( pokemon.tipo == "fuego"){
            console.log(pokemon.nombre + " " + pokemon.tipo);
        }
    }
}
tipoPokemon(pokemons)