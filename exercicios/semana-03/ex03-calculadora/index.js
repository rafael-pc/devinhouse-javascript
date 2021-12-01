"use strict";

const soma = document.querySelector("#operadorSoma");
const subtracao = document.querySelector("#operadorSubtracao");
const divisao = document.querySelector("#operadorDivisao");
const multiplicacao = document.querySelector("#operadorMultiplicacao");

var numeros = document.querySelector("#num");
var operador;
var numeroAnterior;

soma.addEventListener("click", selecionarOperador);
subtracao.addEventListener("click", selecionarOperador);
divisao.addEventListener("click", selecionarOperador);
multiplicacao.addEventListener("click", selecionarOperador);

function atualizarDisplay(texto) {
  var numeros = document.querySelector("#num");
  numeros.value = texto;
}

function selecionarOperador(evento) {
  calcular();
  operador = evento.target.textContent;
  numeroAnterior = parseFloat(numeros.value);
}

function calcular() {
  const numeroAtual = parseFloat(numeros.value);
  if (operador == "+") {
    atualizarDisplay(numeroAnterior + numeroAtual);
  } else if (operador == "-") {
    atualizarDisplay(numeroAnterior - numeroAtual);
  } else if (operador == "/") {
    atualizarDisplay(numeroAnterior / numeroAtual);
  } else if (operador == "*") {
    atualizarDisplay(numeroAnterior * numeroAtual);
  }
}

numeros.id;
