const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector('body')

// console.log(body);

buttons.forEach(function(btn){
    console.log(btn)
    btn.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.backgroundColor='grey';
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor='white';
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor='blue';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor='yellow';
        }
    })
});






