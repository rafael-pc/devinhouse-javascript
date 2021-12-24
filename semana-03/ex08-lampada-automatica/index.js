let imagem = document.querySelector("img");

document.addEventListener("load", lampadaDesligada());

function lampadaDesligada() {
  imagem.setAttribute(
    "src",
    "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-apagada.png"
  );
  setTimeout(lampadaAcesa, 5000);
}

function lampadaAcesa() {
  imagem.setAttribute(
    "src",
    "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-acesa.png"
  );
}
