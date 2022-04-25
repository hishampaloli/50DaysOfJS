const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))


function doTheTrick(theclicked){
    if(good.checked && cheap.checked && fast.checked){
        if(good === theclicked){
            fast.checked = false
        }

        if(cheap === theclicked){
            good.checked = false
        }

        if(fast === theclicked){
            cheap.checked = false
        }

        
    }
}