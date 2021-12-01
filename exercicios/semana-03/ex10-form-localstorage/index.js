let form = document.body.querySelector("form");
let i = 2;
console.log(i);

function inserirEndereco() {
  let novoEndereco = document.createElement("input");
  novoEndereco.setAttribute("type", "text");
  novoEndereco.setAttribute("name", "endereço " + [i++]);
  form.appendChild(novoEndereco);
}

document.getElementById("btn").addEventListener("click", function () {
  let json = {};
  for (var dados of form) {
    var val = dados.value;
    json[dados.name] = val;
  }
  localStorage.setItem("formulario", JSON.stringify(json));
});
