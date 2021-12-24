export class Produto {
    constructor(nome, imagem, valor, parcelas) {
      this.nome = nome;
      this.imagem = imagem;
      this.valor = valor;
      this.parcelas = parcelas;
  
      const container = document.getElementById("container");
  
      const carro = document.createElement("div");
      carro.setAttribute("id", "carro");
  
      const nomeCarro = document.createElement("h3");
      nomeCarro.textContent = this.nome;
      carro.appendChild(nomeCarro);
  
      const imagemCarro = document.createElement("img");
      imagemCarro.setAttribute("src", this.imagem);
      imagemCarro.style.width = "300px";
      imagemCarro.style.height = "200px";
      carro.appendChild(imagemCarro);
  
      const valorCarro = document.createElement("div");
      valorCarro.textContent = "Valor: R$ " + this.valor;
      carro.appendChild(valorCarro);
  
      const label = document.createElement("label");
      label.textContent = "Parcelas: ";
      carro.appendChild(label);
  
      const parcelasCarro = document.createElement("select");
  
      for (let i = 0; i < parcelas.length; i++) {
        const parcela = document.createElement("option");
        parcela.textContent = parcelas[i] + 'x';
        parcelasCarro.appendChild(parcela);
      }
  
      carro.appendChild(parcelasCarro);
      container.appendChild(carro);
    }
  }