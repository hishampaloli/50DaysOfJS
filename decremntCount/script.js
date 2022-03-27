const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0'

    function countkaro(){
        const counterVal = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        
        const increment = counterVal / 200;

        if(c < counterVal){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(countkaro, 1)
        }else{
            counter.innerText = counterVal
        }
    }
    
    countkaro()

})