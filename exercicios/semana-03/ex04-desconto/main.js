let valorTotal = document.getElementById('valor-total')
let desconto = document.getElementById('desconto')
let btn = document.getElementById('button')

btn.addEventListener('click', () =>{
    const valorDesconto = (desconto.value / 100) * valorTotal.value
    const valorComDesconto = valorTotal.value - valorDesconto
    alert('Valor total = ' + valorTotal.value + '; Valor com desconto = ' + valorComDesconto + '; Valor do desconto = ' + valorDesconto)
})