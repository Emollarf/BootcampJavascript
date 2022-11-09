const pokemons = [
{
    nombre: "Charmander",
    tipoDePokemon: "Fuego"
},
{
    nombre: "Pikachu",
    tipoDePokemon: "Electrico",
},
{
    nombre: "Bulbasaur",
    tipoDePokemon: "Planta",
}
] 
     console.log(pokemons)

for (const pokemon of pokemons) { 
    if (pokemon.tipoDePokemon == "Fuego") {
        console.log( "Es un pokemon de fuego")
    }
    else {  
        console.log ("no es un pokemon de fuego")
    } //pokemon es un elemento de la lista pokemons
    
}

for (const pokemon of pokemons) {
    if (pokemon.tipoDePokemon == "Fuego"){
        console.log (pokemon.nombre + " " + "Es un pokemon de fuego")
    }
    else if ( pokemon.tipoDePokemon == "Planta"){
        console.log (pokemon.nombre + " " + "Es un pokemon de planta")
    } else if (pokemon.tipoDePokemon == "Electrico"){
        console.log (pokemon.nombre + " " + "Es un pokemon de electricidad")
    } else {
        console.log ("No es un pokemon")
    }
    
}