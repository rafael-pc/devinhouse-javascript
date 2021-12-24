export const subtrair = document
  .getElementById("subtrair")
  .addEventListener("click", () => {
    const resultados = document.getElementById("resultados-subtracao");
    const valor1 = document.getElementById("value-1");
    const valor2 = document.getElementById("value-2");

    const subtrairResultado = +valor1.value - +valor2.value;
    const resultado = document.createElement("div");
    resultado.textContent = "Resultado: " + subtrairResultado;
    resultados.appendChild(resultado);
    return subtrairResultado;
  });
