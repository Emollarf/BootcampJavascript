const pokemons = [  // Cuando es un array de objetos, primero se crea el array y luego se escriben las propiedades de los objetos. 
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

for (const pokemon of pokemons) { // pokemon es un elemento de la lista pokemons
    if (pokemon.tipoDePokemon == "Fuego") { //se coge un elemento de la lista y la clase determinada, no la lista.
        console.log( "Es un pokemon de fuego")
    }
    else {  
        console.log ("no es un pokemon de fuego")
    } 
    
}

for (const pokemon of pokemons) {
    if (pokemon.tipoDePokemon == "Fuego"){
        console.log (pokemon.nombre + " " + "Es un pokemon de fuego") // los strings hay que + para que se imprima todo
    }
    else if ( pokemon.tipoDePokemon == "Planta"){
        console.log (pokemon.nombre + " " + "Es un pokemon de planta")
    } else if (pokemon.tipoDePokemon == "Electrico"){
        console.log (pokemon.nombre + " " + "Es un pokemon de electricidad")
    } else {
        console.log ("No es un pokemon")
    }
    
}