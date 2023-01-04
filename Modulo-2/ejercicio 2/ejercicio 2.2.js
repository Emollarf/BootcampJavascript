const animals = [
    { name: 'Lion King', isCarnivore: true },
    { name: 'Plant', isCarnivore: false },
    { name: 'Ant', isCarnivore: true },
    { name: 'Bee', isCarnivore: true },
    { name: 'Mouse', isCarnivore: true },
  ];

let carnivoros = [];
let hervivoros = [];
for(const animal of animals)
{if(animal.isCarnivore === true){
    carnivoros.push(animal.name)
}else {
    hervivoros.push(animal.name)
     }
}
const body = document.querySelector('body');

const h2 = document.createElement('h2')
const h1 =document.createElement('h2')
h1.textContent = 'Lista carnivoros'
body.append(h1)

for(i=0; i< carnivoros.length; i++){
    const liCarnivoros = document.createElement('li');
    liCarnivoros.classList.add('carnivoros')
    liCarnivoros.textContent = carnivoros[i] + ` 🍖`;
    const ulCarnivoros = document.createElement('ul')
    ulCarnivoros.append(liCarnivoros)
    body.append(ulCarnivoros)
}

h2.textContent = ' Lista hervivoros'
body.append(h2)

for (i=0; i<hervivoros.length; i++){
    const liHervivoros = document.createElement('li');
    liHervivoros.classList.add('hervivoros')
    liHervivoros.textContent = hervivoros[i] + `🌱`;
    const ulHervivoros = document.createElement ('ul')
    ulHervivoros.append(liHervivoros);
    body.append(ulHervivoros)
}

