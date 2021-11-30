class Produto {
    constructor(nome, imagem, valor, parcelas) {
        this.nome = nome
        this.imagem = imagem
        this.valor = valor
        this.parcelas = parcelas

        const container = document.getElementById('container')

        const carro = document.createElement('div')
        carro.setAttribute('id', 'carro')

        const nomeCarro = document.createElement('h3')
        nomeCarro.textContent = this.nome
        carro.appendChild(nomeCarro)

        const imagemCarro = document.createElement('img')
        imagemCarro.setAttribute('src', this.imagem)
        imagemCarro.style.width = "300px";
        imagemCarro.style.height = "200px";
        carro.appendChild(imagemCarro)

        const valorCarro = document.createElement('div')
        valorCarro.textContent = 'Valor: ' + this.valor
        carro.appendChild(valorCarro)

        const label = document.createElement('label')
        label.textContent = 'Parcelas: '
        carro.appendChild(label)

        const parcelasCarro = document.createElement('select')

        for(let i = 0; i < parcelas.length; i++){
            const parcela = document.createElement('option')
            parcela.textContent = parcelas[i]
            parcelasCarro.appendChild(parcela)
        }

        carro.appendChild(parcelasCarro)
        container.appendChild(carro)
    }
}

const produto1 = new Produto('Polo', 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80', 70000, [48, 60, 72, 84])
console.log(produto1)

const produto2 = new Produto('Lamborghini', 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' , 3700000, [1, 2, 3])
console.log(produto2)

var 





