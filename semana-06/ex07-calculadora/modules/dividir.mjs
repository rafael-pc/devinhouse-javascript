export const dividir = document
  .getElementById("dividir")
  .addEventListener("click", () => {
    const resultados = document.getElementById("resultado-divisao");
    const valor1 = document.getElementById("value-1");
    const valor2 = document.getElementById("value-2");

    const dividirResultado = +valor1.value / +valor2.value;
    const resultado = document.createElement("div");
    resultado.textContent = "Resultado: " + dividirResultado;
    resultados.appendChild(resultado);
    return dividirResultado;
  });
