//Función flecha doble

doblearraw = num => num * 2
console.log("función flecha" + " " + doblearraw (3))


cuadradoarrow = num => num * num
console.log( "funcion flecha doble" + " " + cuadradoarrow(2))



areaRectangulo1 = (b, a) => b*a
console.log("función flecha area de rectagulo" + " " + areaRectangulo1(2,3))


parNonflecha = num => {if (num%2 ==0){ return "par"} else { return "impar"}}
 console.log("funcion flecha par" + " " + parNonflecha(2))
  
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
  
mostrarPokemonsArrow = listaPokemon => {for ( const pokemon of listaPokemon){ console.log (pokemon.nombre)}} 
mostrarPokemonsArrow(pokemons)

mostrarPokemonsTipoArrow = listaPokemon => {
    for(const pokemon of listaPokemon){
        if (pokemon.tipo == "fuego"){
             console.log (pokemon.nombre)
            }
        }
    }
mostrarPokemonsTipoArrow (pokemons)