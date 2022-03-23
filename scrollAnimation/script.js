const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

checkBoxes()

function checkBoxes(){
    let trigger = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxhight = box.getBoundingClientRect().top;

        if(boxhight < trigger){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}