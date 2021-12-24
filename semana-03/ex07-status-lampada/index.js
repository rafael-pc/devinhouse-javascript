let statusLampada = false;
let flagPrimeiroCarregamento = true;
let imgLampada = document.getElementById("imagem");
let texto;
document.addEventListener("DOMContentloaded", ligaDesliga);

function ligaDesliga() {
  let statusLampadaGuardado = localStorage.getItem("status");
  statusLampadaGuardado = statusLampadaGuardado == "true";
  if (!flagPrimeiroCarregamento) {
    statusLampada = !statusLampada;
  }
  if (statusLampada) {
    imgLampada.setAttribute(
      "src",
      "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-acesa.png"
    );
    localStorage.setItem("imagem", imgLampada.src);
    texto = " Luz acessa";
    localStorage.setItem("text", texto);
  } else {
    imgLampada.setAttribute(
      "src",
      "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-apagada.png"
    );
    localStorage.setItem("imagem", imgLampada.src);
    texto = " Luz apagada";
    localStorage.setItem("text", texto);
  }
  document.getElementById("status").innerHTML = texto;
  flagPrimeiroCarregamento = false;
  localStorage.setItem("status", statusLampada);
}

imagem.src = localStorage.getItem("imagem");
