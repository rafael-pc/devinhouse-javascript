class Transacoes {
  #conta;
  #valorDaTransacao;
  constructor(valorDaTransacao) {
    this.#conta = 500;
    this.#valorDaTransacao = valorDaTransacao;
    this.tranferencia();
    this.deposito();
  }

  tranferencia() {
    const saldo = this.#conta - this.#valorDaTransacao;
    console.log(saldo);
    return saldo;
  }

  deposito() {
    const saldo = this.#conta + this.#valorDaTransacao;
    console.log(saldo);
    return saldo;
  }
}

let deposito = true;

if (!deposito) {
  const transacao = new Transacoes(100);
  console.log(transacao);
} else {
  const transacao = new Transacoes(200);
  console.log(transacao);
}
