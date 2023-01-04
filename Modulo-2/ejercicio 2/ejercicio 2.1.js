const app = document.querySelector(".app");
const img = document.createElement ('img');
const web = 'https://via.placeholder.com/150'
img.src = web
img.alt = 'imagen ejemplo'

app.append(img)


const parrafo = document.querySelector('p')
/* parrafo.append(img) */

app.insertBefore(img, parrafo)


const parrafo2 = document.querySelector('p:nth-child(2)')
app.insertBefore(img, parrafo2)