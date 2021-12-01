class Cliente {
  constructor(nome, cpf, endereco, telefone) {
    this.nome = nome;
    this.cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
    // this.validaCPF()
  }
  get validaCPF() {
    if (this.cpf.toString().length === 11) {
      return "CPF valido";
    } else {
      return "CPF invalido" + (this.cpf = "");
    }
  }
  set validaCPF(value) {
    return (this.cpf = value);
  }
}

class Conta extends Cliente {
  constructor(nome, cpf, endereco, telefone, numeroConta, saldo) {
    super(nome, cpf, endereco, telefone);
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }
}

const conta = new Conta(
  "Rafael",
  99999999999,
  ["rua do Marfin", "rua Acari Silva"],
  96334578,
  123456,
  10000
);

conta.validaCPF = 11111111111;

console.log(conta.validaCPF);
console.log(conta.cpf);
