class Endereco {
  constructor(logradouro, numero, cidade, estado, pais, cep) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
    this.cep = cep;
  }
}

const btn = document.querySelector("button");

const logradouroCliente = document.getElementById("logradouro-cliente");
const numeroCliente = document.getElementById("numero-cliente");
const cidadeCliente = document.getElementById("cidade-cliente");
const estadoCliente = document.getElementById("estado-cliente");
const paisCliente = document.getElementById("pais-cliente");
const cepCliente = document.getElementById("cep-cliente");

const logradouroLoja = document.getElementById("logradouro-loja");
const numeroLoja = document.getElementById("numero-loja");
const cidadeLoja = document.getElementById("cidade-loja");
const estadoLoja = document.getElementById("estado-loja");
const paisLoja = document.getElementById("pais-loja");
const cepLoja = document.getElementById("cep-loja");

const logradouroMercado = document.getElementById("logradouro-mercado");
const numeroMercado = document.getElementById("numero-mercado");
const cidadeMercado = document.getElementById("cidade-mercado");
const estadoMercado = document.getElementById("estado-mercado");
const paisMercado = document.getElementById("pais-mercado");
const cepMercado = document.getElementById("cep-mercado");

btn.addEventListener("click", () => {
  console.log(logradouroCliente.value);
  const enderecoCliente = new Endereco(
    logradouroCliente.value,
    numeroCliente.value,
    cidadeCliente.value,
    estadoCliente.value,
    paisCliente.value,
    cepCliente.value
  );
  const enderecoLoja = new Endereco(
    logradouroLoja.value,
    numeroLoja.value,
    cidadeLoja.value,
    estadoLoja.value,
    paisLoja.value,
    cepLoja.value
  );
  const enderecoMercado = new Endereco(
    logradouroMercado.value,
    numeroMercado.value,
    cidadeMercado.value,
    estadoMercado.value,
    paisMercado.value,
    cepMercado.value
  );

  const enderecosArray = [enderecoCliente, enderecoLoja, enderecoMercado];
  console.log(enderecosArray);

  localStorage.setItem("formulario", JSON.stringify(enderecosArray));
});
