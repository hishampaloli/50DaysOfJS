const smallCups = document.querySelectorAll('.cup-small'); 
const remained = document.querySelector('.remained');
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')

updateBigCup()


smallCups.forEach((smallcup, idx) => {
    smallcup.addEventListener('click', () => {
        highlightCups(idx);
    })
})

function highlightCups(idx) {
  if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full'))[
      idx--
  ]

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    });

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalcups = smallCups.length;

    if(fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }else{
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalcups * 330}px`
        percentage.innerText = `${fullCups / totalcups * 100}`
    }

    if(fullCups === totalcups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }

}