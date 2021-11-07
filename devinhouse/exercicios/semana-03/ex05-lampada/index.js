var statusLampada = false;
var flagPrimeiroCarregamento = true;

document.addEventListener("DOMContentloaded", ligaDesliga);

function ligaDesliga() {
    var statusLampadaGuardado = localStorage.getItem("status");
    statusLampadaGuardado = statusLampadaGuardado == "true";
    if (!flagPrimeiroCarregamento) {
        statusLampada = !statusLampada;
    }
    var texto = '';
    if (statusLampada) {
        texto = "Luz acesa"
    } else {
        texto = "Luz apagada"
    }
    document.getElementById("status").innerHTML = texto;
    flagPrimeiroCarregamento = false;
    localStorage.setItem("status", statusLampada);
}