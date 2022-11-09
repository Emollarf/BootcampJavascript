const pokemon = ["Picachu", "Bulbasur", "Charmander",
]
console.log (pokemon)

// mostrar los nombres de los pokemons en linas diferentes
console.log (pokemon[0])
console.log (pokemon[1])
console.log (pokemon[2])     

// mostrar los nomnbres de los pokemons en la misma linea
console.log (pokemon[0], pokemon[1], pokemon[2])
console.log (pokemons.join (" ")) // otra manera de mostrar cada nombre de pokemon en una linea.


// Diferentes tipos de bucles
for (const element of pokemon) {
    console.log(element)}

for(let i=0; i<pokemon.leght-1; i++){
    console.log(pokemon[i])
}

pokemon.forEach((element) => {
    console.log (element);
});