// Crea un cuadrado de 100x100px con el color de fondo red y el color de texto white con el texto Soy un cuadrado en el centro.
const app = document.querySelector('.app');
const square = document.createElement('div');
square.classList.add('square');
square.textContent = 'soy un cuadrado';
app.appendChild(square);


//Cada vez que se recargue la página el cuadrado debe tener un color de fondo aleatorio de entre los siguientes: red, green, blue, yellow, pink, purple, orange.

const color = [
    'red', 
    'green', 
    'blue', 
    'yellow', 
    'pink', 
    'purple', 
    'orange',
]

const random = color[Math.floor(Math.random() *color.length)]

square.style.backgroundColor = random; 


// Si el color de fondo es red, green o blue el tamaño del cuadrado debe ser de 100x100px, si es yellow, pink o purple el tamaño del cuadrado debe ser de 200x200px y si es orange el tamaño del cuadrado debe ser de 300x300px.

if (random === 'red'||
    random === 'blue' ||
    random === 'green'){
        square.style.width = '100px';
        square.style.height ='100px';
    } else {
        if (random === 'yellow'||
            random === 'pink' ||
            random === 'purple'){
            square.style.width = '200px';
            square.style.height ='200px';
        }else{
            if(random ==='orange'){
                square.style.width = '300px';
                square.style.height ='300px'
            }
        }
    }

    const tamaños = {
        red : 'pequeño',
        green: 'pequeño',
        blue :'pequeño', 
        yellow :'mediano', 
        pink: 'mediano',
        purple : 'mediano',  
        orange: 'grande',
    }
    square.classList.add(tamaños[color])