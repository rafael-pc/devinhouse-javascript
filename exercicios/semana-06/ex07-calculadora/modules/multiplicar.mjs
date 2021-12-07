export const multiplicar = document
  .getElementById("multiplicar")
  .addEventListener("click", () => {
    const resultados = document.getElementById("resultado-multiplicacao");
    const valor1 = document.getElementById("value-1");
    const valor2 = document.getElementById("value-2");

    const multiplicarResultado = +valor1.value * +valor2.value;
    const resultado = document.createElement("div");
    resultado.textContent = "Resultado: " + multiplicarResultado;
    resultados.appendChild(resultado);
    return multiplicarResultado;
  });