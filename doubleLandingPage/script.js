const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener('mouseenter', () => {
    container.classList.add('show-left');
    container.classList.remove('show-right');
})

right.addEventListener('mouseenter', () => {
    container.classList.remove('show-left');
    container.classList.add('show-right');
})