const input = document.querySelector('.input')
const p = document.querySelector('.parrafo')
const formulario = document.querySelector('.form')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    p.textContent = input.value;
    const largoP = p.textContent.length 
    if (largoP < 5 ){
        p.classList.add('rojo')
    } else{
        p.classList.remove('rojo')
    }
    formulario.reset(); 
});
