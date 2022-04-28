const left = document.getElementById('left');
const right = document.getElementById('right');
const images = document.getElementById('imgs');



let index = 0

right.addEventListener('click', () => {
    index++
    slide();
})

left.addEventListener('click', () => {
    index--
    slide();
})

function slide(){

    if(index < 0){
        index = 3
    }
    if(index > 3){
        index = 0
    }
    const sld = index * 100
    images.style.transform = ` translateX(-${sld}%)`

}
