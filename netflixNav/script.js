const open = document.getElementById('fa-bars');
const close =document.getElementById('fa-times');
const balck = document.querySelector('.nav-black');
const red = document.querySelector('.nav-red');
const white = document.querySelector('.nav-white');

open.addEventListener('click',() => {

    setTimeout(() => {balck.classList.add('show')},500)
    setTimeout(() => {red.classList.add('show')},700)
    setTimeout(() => {white.classList.add('show')},850)
    
    
})

close.addEventListener('click', () => {
    setTimeout(() => {balck.classList.remove('show')},850)
    setTimeout(() => {red.classList.remove('show')},700)
    setTimeout(() => {white.classList.remove('show')},500)
})