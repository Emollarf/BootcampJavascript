const boton = document.querySelector('.btn')
const colorContainer = document.querySelector('.color-container')
const colorCodigo = document.querySelector('.color-code')

const añadirColorRandom = (evento)=>{
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    colorContainer.style.backgroundColor = randomColor
    colorCodigo.textContent = randomColor
}

boton.addEventListener('click', añadirColorRandom);