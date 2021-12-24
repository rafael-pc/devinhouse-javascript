const $circuloPrincipal = document.querySelector("#circulo-principal");
const $pontuacao = document.querySelector("#ponto");
let diminuicao = 0;
let perdeu = false;

setInterval(() => {
  const objetoDimencoes = recuperaDimensaoDoCirculo();
  let largura = objetoDimencoes.largura;
  let altura = objetoDimencoes.altura;
  $circuloPrincipal.style.width = largura - diminuicao < 0 ? 0 + "px" : altura - diminuicao + "px";
  $circuloPrincipal.style.height = altura - diminuicao + "px";
  if (!perdeu) {
    validaSePerdeu();
  }
}, 100);

$circuloPrincipal.addEventListener("click", (e) => {
  const objetoDimencoes = recuperaDimensaoDoCirculo();
  let largura = objetoDimencoes.largura;
  let altura = objetoDimencoes.altura;
  $circuloPrincipal.style.width = largura + 25 + "px";
  $circuloPrincipal.style.height = altura + 25 + "px";
  diminuicao = diminuicao + 0.3;
  if (!perdeu) {
    validaSePerdeu();
    somaPontos();
  } else {
    perdeu = false;
  }
});

function somaPontos() {
  let pontuacaoAtual = parseFloat($pontuacao.textContent);
  $pontuacao.textContent = pontuacaoAtual + parseFloat(1 + diminuicao * 10);
}

function validaSePerdeu() {
  const objetoDimencoes = recuperaDimensaoDoCirculo();
  if (
    objetoDimencoes.altura < 25 ||
    objetoDimencoes.altura > 350 ||
    objetoDimencoes.largura < 25 ||
    objetoDimencoes.largura > 350
  ) {
    perdeu = true;
    const resultado = confirm("Game Over. Deseja jogar novamente?");
    if (resultado) {
      $circuloPrincipal.style.width = 190 + "px";
      $circuloPrincipal.style.height = 190 + "px";
      diminuicao = 0;
    } else {
      diminuicao = 0;
    }
  }
}

function recuperaDimensaoDoCirculo() {
  return {
      largura: $circuloPrincipal.getBoundingClientRect().width,
      altura: $circuloPrincipal.getBoundingClientRect().height
  };
}


