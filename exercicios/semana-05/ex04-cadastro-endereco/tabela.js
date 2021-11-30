const table = document.getElementById('tabela');

const retrievedScores = JSON.parse(localStorage.getItem("formulario"));

for (var i = 0; i < retrievedScores.length; i++) {
    table.innerHTML += "<tr><td>" + retrievedScores[i].logradouro + "</td><td>" + retrievedScores[i].numero + "</td><td>" + retrievedScores[i].cidade + "</td><td>" + retrievedScores[i].estado + "</td><td>" + retrievedScores[i].pais + "</td><td>" + retrievedScores[i].cep + "</td></tr>";
}



