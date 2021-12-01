function functionButton() {
  let numero = document.querySelector("#num").value;
  let divisores = 0;
  for (var i = 1; i <= numero; i++) if (numero % i == 0) divisores++;
  if (divisores == 2) alert("O numero digitado é primo");
  else alert("O numero digitado não é primo");
}
