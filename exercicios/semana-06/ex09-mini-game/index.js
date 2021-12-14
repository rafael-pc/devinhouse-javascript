const $circuloPrincipal = document.querySelector("#circulo-principal");
const $pontuacao = document.querySelector("#ponto");
let _diminuicao = 0;
let _perdeu = false;

setInterval(() => {
  const objetoDimencoes = recuperaDimensaoDoCirculo();
  let largura = objetoDimencoes.largura;
  let altura = objetoDimencoes.altura;
  $circuloPrincipal.style.width =
    largura - _diminuicao < 0 ? 0 + "px" : altura - _diminuicao + "px";
  $circuloPrincipal.style.height = altura - _diminuicao + "px";
  if (!_perdeu) {
    validaSePerdeu();
  }
}, 100);

$circuloPrincipal.addEventListener("click", (e) => {
  const objetoDimencoes = recuperaDimensaoDoCirculo();
  let largura = objetoDimencoes.largura;
  let altura = objetoDimencoes.altura;
  $circuloPrincipal.style.width = largura + 25 + "px";
  $circuloPrincipal.style.height = altura + 25 + "px";
  _diminuicao = _diminuicao + 0.3;
  if (!_perdeu) {
    validaSePerdeu();
    somaPontos();
  } else {
    _perdeu = false;
  }
});

function somaPontos() {
  let pontuacaoAtual = parseFloat($pontuacao.textContent);
  $pontuacao.textContent = pontuacaoAtual + parseFloat(1 + _diminuicao * 10);
}

function validaSePerdeu() {
  const objetoDimencoes = recuperaDimensaoDoCirculo();
  if (
    objetoDimencoes.altura < 25 ||
    objetoDimencoes.altura > 350 ||
    objetoDimencoes.largura < 25 ||
    objetoDimencoes.largura > 350
  ) {
    _perdeu = true;
    const resultado = confirm("Game Over. Deseja jogar novamente?");
    if (resultado) {
      $circuloPrincipal.style.width = 190 + "px";
      $circuloPrincipal.style.height = 190 + "px";
      _diminuicao = 0;
    } else {
      _diminuicao = 0;
    }
  }
}

function recuperaDimensaoDoCirculo() {
  return {
    largura: $circuloPrincipal.getBoundingClientRect().width,
    altura: $circuloPrincipal.getBoundingClientRect().height,
  };
}


