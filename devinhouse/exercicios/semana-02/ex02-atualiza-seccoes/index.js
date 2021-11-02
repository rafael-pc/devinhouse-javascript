var usuarios = parseInt(document.getElementById('numParticipante').innerHTML),
    mediaIdade = parseInt(document.getElementById('idadeMedia').innerHTML),
    satisfeito = parseInt(document.getElementById('numSatisfeito').innerHTML),
    myBtn = document.getElementById('myBtn'),
    somaIdade = 0;

myBtn.addEventListener('click', () => {
    let nome = window.prompt('Digite seu nome:'),
        satisfação = window.prompt('Digite um número de 1 a 10 para expressar sua satisfação:'),
        idadeAtual = parseInt(window.prompt('Digite sua idade:')),
        pesquisa = window.confirm('Podemos incluir você na lista de satisfeitos?');

    usuarios += 1;
    //usuarios++
    document.getElementById('numParticipante').innerHTML = usuarios;

    somaIdade += idadeAtual
    mediaIdade = somaIdade / usuarios
    document.getElementById('idadeMedia').innerHTML = Math.round(mediaIdade);

    if (pesquisa) {
        satisfeito += 1
        window.alert('Salvo com sucesso')
        document.getElementById('numSatisfeito').innerHTML = satisfeito
    }
})
