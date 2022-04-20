const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = ['Hi I am Hisham Paloli','I am a web developer', 'I make Awsome Websites'];
let idx = 1;
let c = 0
let speed = 300 / speedEl.value;


writeText();

function writeText() {
    textEl.innerText = text[c].slice(0,idx);
    idx++

    if(idx > text[0].length){
        idx = 1
        c++
    }
    if(c > 2){
        c = 0
    }
  



    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)