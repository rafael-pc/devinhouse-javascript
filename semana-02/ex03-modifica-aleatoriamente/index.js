var corDeFundo = ["#000000", "#1A1A1A", "#1A3D4C"],
  corDosElementosSobrepostos = ["#E6E6E6", "#CCCCCC", "#0D2526"],
  corDoTexto = ["white", "black"];

const body = document.querySelector("body"),
  article = document.querySelector("article"),
  texto = document.querySelector("article p"),
  btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const numero = Math.floor(Math.random() * 3);
  body.style.backgroundColor = corDeFundo[numero];
  article.style.backgroundColor = corDosElementosSobrepostos[numero];
  texto.style.color = corDoTexto[Math.floor(Math.random() * 2)];
  console.log(numero);
});
