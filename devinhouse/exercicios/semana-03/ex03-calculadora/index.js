
'use strict';

const soma = document.querySelector('#operadorSoma')
const subtracao = document.querySelector('#operadorSubtracao')
const divisao = document.querySelector('#operadorDivisao')
const multiplicacao = document.querySelector('#operadorMultiplicacao')

var numeros = document.querySelector('#num')
var novoNumero = true
var operador;
var numeroAnterior;

soma.addEventListener('click', selecionarOperador)
subtracao.addEventListener('click', selecionarOperador)
divisao.addEventListener('click', selecionarOperador)
multiplicacao.addEventListener('click', selecionarOperador)

function atualizarDisplay(texto){
    var numeros = document.querySelector('#num')
    if(novoNumero){
        numeros.value = texto
        novoNumero = false
    }
}

function operacaoPendente(){
    return operador !== undefined
}

function selecionarOperador(evento){
    if(novoNumero){
        calcular()
        novoNumero = true
        operador = evento.target.textContent
        numeroAnterior = parseFloat(numeros.value)
    }
}

function calcular(){
    if(operacaoPendente()){
        const numeroAtual = parseFloat(numeros.value)
        novoNumero = true
        if(operador == '+'){
            atualizarDisplay(numeroAnterior + numeroAtual)
        }
        else if(operador == '-'){
            atualizarDisplay(numeroAnterior - numeroAtual)
        }
        else if(operador == '/'){
            atualizarDisplay(numeroAnterior / numeroAtual)
        }
        else if(operador == '*'){
            atualizarDisplay(numeroAnterior * numeroAtual)
        }
    }
}














