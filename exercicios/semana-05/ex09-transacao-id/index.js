class Transacoes {
    static count = 0

    constructor(valorDaTransacao, numeroDaConta) {
        this.conta = 500
        this.valorDaTransacao = valorDaTransacao
        this.numeroDaConta = numeroDaConta
        this.date = new Date()
        this.id = ++this.constructor.count
        this.tranferencia()
        this.deposito()
    }

    tranferencia() {
        const saldo = this.conta - this.valorDaTransacao
        // console.log(saldo)
        return saldo
    }

    deposito() {
        const saldo = this.conta + this.valorDaTransacao
        // console.log(saldo)
        return saldo
    }
}

let transacao = false

if (!transacao) {
    const tranferencias1 = new Transacoes(100, 1234567)
    console.log('saldo: ' + tranferencias1.tranferencia())
    console.log(tranferencias1)

    const tranferencias2 = new Transacoes(200, 1234567)
    console.log('saldo: ' + tranferencias2.tranferencia())
    console.log(tranferencias2)
} else {
    const depositos1 = new Transacoes(100, 1234567)
    console.log('saldo: ' + depositos1.deposito())
    console.log(depositos1)

    const depositos2 = new Transacoes(200, 1234567)
    console.log('saldo: ' + depositos2.deposito())
    console.log(depositos2)
}
