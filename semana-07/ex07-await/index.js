var numero = prompt("Digite um numero:");

if (isNaN(numero) || numero > 10 || numero === "") {
  alert("Numero invalido");
}

function create(htmlStr) {
  let frag = document.createDocumentFragment()
  let temp = document.createElement("div");
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

var dog = document.getElementById("dog");
var cat = document.getElementById("cat");

async function dogs() {
  for (var i = 1; i <= numero; i++) {
    try{
      let response = await fetch("https://dog.ceo/api/breeds/image/random");
      let json = await response.json();
      let resultado = json.message;
      let fragment = create(
        "<section class='dog' style='background-image:url(" +
          resultado +
          ")'>D</section>"
      );
      dog.insertBefore(fragment, dog.childNodes[0]);
    }catch(error){
      console.log("errou!", error)
    }
  }
  return;
}

dogs();

async function cats() {
  for (var i = 1; i <= numero; i++) {
    try{
      let response = await fetch("https://api.thecatapi.com/v1/images/search");
      let json = await response.json();
      var resultado = json[0].url;
      var fragment = create(
        "<section class='cat' style='background-image:url(" +
          resultado +
          ")'>C</section>"
      );
      cat.insertBefore(fragment, cat.childNodes[0]);
    }catch(error){
      console.log("errou!", error)
    }
  }
  return;
}

cats();
