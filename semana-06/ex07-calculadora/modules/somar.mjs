export const somar = document
  .getElementById("somar")
  .addEventListener("click", () => {
    const resultados = document.getElementById("resultado-soma");
    const valor1 = document.getElementById("value-1");
    const valor2 = document.getElementById("value-2");

    const somarResultado = +valor1.value + +valor2.value;
    const resultado = document.createElement("div");
    resultado.textContent = "Resultado: " + somarResultado;
    resultados.appendChild(resultado);
    return somarResultado;
  });
