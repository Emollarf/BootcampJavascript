const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
  ];

const nombresUsuarios  = users.map ((usuario)=> usuario.name);
console.log(nombresUsuarios);

const categoriaUsuarios = users.map ((usuario)=> usuario.isPremium);

const categoria = document.querySelector('.categoria');
const listanOrdenada = document.createElement('ul');
for ( const user of users){
    const elemento = document.createElement ('li');
    const categoriaPremium = user.isPremium
    elemento.dataset.premium = categoriaPremium
    elemento.textContent = user.name;
    listanOrdenada.appendChild (elemento);
}
categoria.appendChild(listanOrdenada)


const lis = document.querySelectorAll('li')
const titulo = 'usuario Premium'

for ( const  li of lis ){
    if (li.dataset.premium === 'true'){
        li.setAttribute("style", 'background-color: gold')
        li.setAttribute ('title', 'Usuario Premium')
    }
}



