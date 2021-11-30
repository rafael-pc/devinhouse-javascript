var numero = prompt('Digite um numero:');


if (isNaN(numero) || numero > 10 || numero === ''){
    alert("Numero invalido");
    // numero = null;
}

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
        temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

var dog = document.getElementById('dog')
var cat = document.getElementById('cat')

for (var i = 1; i <= numero; i++) {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(data => data.json())
        .then(json => {
            var resultado = json.message;
            var fragment = create("<section class='dog' style='background-image:url(" + resultado + ")'>D</section>");
            dog.insertBefore(fragment, dog.childNodes[0])
            // dog.appendChild(fragment);
        })
}



for (var i = 1; i <= numero; i++) {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(data => data.json())
        .then(json => {
            var resultado = json[0].url;
            var fragment = create("<section class='cat' style='background-image:url(" + resultado + ")'>C</section>");
            cat.insertBefore(fragment, cat.childNodes[0])
            // cat.appendChild(fragment);
        })
}




