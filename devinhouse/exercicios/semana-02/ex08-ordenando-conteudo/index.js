var textos = ['animal','carro','humano','prédio','cadeira','objeto'];

for(var i = 0 ; i < textos.length; i++){
    let element = document.createElement('section');
    element.innerHTML = (textos.sort(function(a, b){return a.length - b.length})[i]).length
    document.body.appendChild(element); 
}


