class Cliente {
  constructor(nome, cpf, endereco, telefone) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
  }
}

const cliente = new Cliente(
  "Rafael",
  99999999999,
  ["rua do Marfin", "rua Acari Silva"],
  96334578
);

console.log(nome);
