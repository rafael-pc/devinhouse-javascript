var textos = ['animal','carro','humano','prédio','cadeira','objeto'];

for(var i = 0 ; i < textos.length; i++){
    let element = document.createElement('section');
    element.innerHTML = textos.sort()[i];   
    document.body.appendChild(element); 
}
console.log(textos)
