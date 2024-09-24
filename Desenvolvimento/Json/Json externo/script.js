// Carrega o arquivo JSON usando fetch
fetch('dados.json')
.then(response => response.json()) // Converte a resposta para JSON
.then(data => {
const tabela = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];
// Itera pelos dados do JSON e insere no HTML
data.usuarios.forEach(usuario => {
const linha = tabela.insertRow(); // Cria uma nova linha na tabela
// Insere os dados nas células da linha
linha.insertCell(0).textContent = usuario.nome;
linha.insertCell(1).textContent = usuario.idade;
linha.insertCell(2).textContent = usuario.cidade;
});
})
.catch(error => console.error('Erro ao carregar o arquivo JSON:', error));