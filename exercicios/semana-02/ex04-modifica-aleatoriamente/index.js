
var button = document.querySelector('#btn'),
    background = document.querySelector('body'),
    superior = 0,
    inferior = 0,
    contadorCem = 0;


button.addEventListener('click', () => {
    let numeros = Math.floor((Math.random() * 1000) + 1);
    console.log(numeros)
    if(numeros > 500){
        superior++;
        console.log('superior = ' + superior)
    }
    if(numeros < 501){
        inferior++;
        console.log('inferior = ' + inferior)
    }
    if(superior > inferior){
        background.style.backgroundImage = "url('https://i.picsum.photos/id/651/200/300.jpg?hmac=0w4DoCrs0gvMucmilCFXoqZAB9P3n94dVJ70mY8A4yQ')"; 
    }
    if(inferior > superior){
        background.style.backgroundImage = "url('https://via.placeholder.com/500')"; 
    }
    if(inferior === 100){
        background.style.backgroundColor = 'orange';
        contadorCem++
    }
    if(contadorCem > 1){
        background.style.backgroundColor = 'black';
    } 
})



