class Cliente{
    constructor (nome, cpf, endereco, telefone){
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone
    }
}

class Conta extends Cliente{
    constructor(nome, cpf, endereco, telefone, numeroConta, saldo){
        super(nome, cpf, endereco, telefone)
        this.numeroConta = numeroConta
        this.saldo = saldo
    }
}

const conta = new Conta('Rafael', 99999999999, ['rua do Marfin','rua Acari Silva'], 96334578, 123456, 10000)

console.log(conta)