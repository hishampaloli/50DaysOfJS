const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let count = 0;
let int = setInterval(blurring,30)

function blurring(){
    count++;

    if(count > 99){
        clearInterval(int)
    }
    loadText.innerText = count + '%'
    loadText.style.opacity = scale(count, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(count, 0, 100, 20, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }