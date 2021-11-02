var nome = window.prompt('Digite seu nome:'),
    idade = window.prompt('Digite sua idade:'),
    diaDaSemana = window.prompt('Digite o dia da semana:'),
    esportePredileto = window.prompt('Digite seu esporte favorito:'),
    alguemImportante = window.prompt('Digite o nome de alguém importante:'),
    alguemAdmiravel = window.prompt('Digite nome de alguém que você admira:');


var mensagem = `“Hoje, ${diaDaSemana}, é um dia histórico. Todos os fãs de ${esportePredileto} estão maravilhados com a proeza realizada pelo(a) atleta ${nome}. ${alguemImportante} não conteve as lágrimas ao comentar sobre em uma entrevista e até o(a) ${alguemAdmiravel} twittou “ é muito bom ver alguém com ${idade} anos demonstrando tanta habilidade”.`

document.write(mensagem)