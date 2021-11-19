let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobrenome')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')
let endereco = document.getElementById('endereco')

let formulario = document.getElementById('formulario')

function inserirEndereco(){
    let novoEndereco = document.createElement('input')
    novoEndereco.setAttribute('type', 'text')
    formulario.appendChild(novoEndereco)
}