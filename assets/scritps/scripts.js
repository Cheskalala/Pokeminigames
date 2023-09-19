const button = document.querySelector('.button')
const nav    = document.querySelector('.menu')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})
