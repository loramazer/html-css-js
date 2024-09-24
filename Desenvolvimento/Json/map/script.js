// Usa fetch() para carregar o arquivo JSON externo
fetch('dados.json')
.then(response => response.json()) // Converte a resposta para JSON
.then(estudantes => {
// Extrai os nomes usando map()
const nomes = estudantes.map(estudante => estudante.nome);
// Seleciona o elemento <ul> no DOM
const lista =
document.getElementById('listaNomes');
// Adiciona cada nome como um item da lista 
nomes.forEach(nome => {
const li = document.createElement('li');
li.textContent = nome;
lista.appendChild(li);
});
})
.catch(error => console.error('Erro ao carregar o JSON:', error));