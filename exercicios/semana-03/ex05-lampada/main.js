let statusLampada = false;
let flagPrimeiroCarregamento = true;
let imagem = document.querySelector('img')

document.addEventListener("DOMContentloaded", ligaDesliga);

function ligaDesliga() {
    let statusLampadaGuardado = localStorage.getItem("status");
    statusLampadaGuardado = statusLampadaGuardado == "true";
    if (!flagPrimeiroCarregamento) {
        statusLampada = !statusLampada;
    }
    let texto = '';
    if (statusLampada) {
        imagem.setAttribute ('src','https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-acesa.png');
        texto = " Luz acesa"
    } else {
        imagem.setAttribute ('src','https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-apagada.png');
        texto = " Luz apagada"
    }
    document.getElementById("status").innerHTML = texto;
    flagPrimeiroCarregamento = false;
    localStorage.setItem("status", statusLampada);
}