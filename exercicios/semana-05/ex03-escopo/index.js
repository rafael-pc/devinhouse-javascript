
function inserirEndereco() {
    let i = 2
    let form = document.body.querySelector("form")
    let novoEndereco = document.createElement('input')
    novoEndereco.setAttribute('type', 'text')
    novoEndereco.setAttribute('name', 'endereço ' + [i++])
    form.appendChild(novoEndereco)
}

document.getElementById("btn").addEventListener("click", function () {
    let form = document.body.querySelector("form")
    let json = {};
    for (var dados of form) {
        var val = dados.value;
        json[dados.name] = val;
    }
    localStorage.setItem("formulario", JSON.stringify(json));
});