let livros = [];
// Carrega os dados do arquivo JSON ao carregar a página
fetch('dados.json')
.then(response => response.json())
.then(data => {
livros = data.livros; // Armazena os dados na variável global
exibirLivros(livros); // Exibe os livros inicialmente
})
.catch(error => console.error('Erro ao carregar os livros:', error));
// Função para exibir a lista de livros
function exibirLivros(livros) {
const listaLivros = document.getElementById('listaLivros');
listaLivros.innerHTML = ''; // Limpa a lista
livros.forEach(livro => {
const li = document.createElement('li');
li.textContent = `${livro.titulo} - ${livro.autor} (${livro.ano})`;
listaLivros.appendChild(li);
});
}
// Função de filtro que é chamada ao digitar no campo de busca
function filtrarLivros() {
const termo = document.getElementById('filtro').value.toLowerCase();
const livrosFiltrados = livros.filter(livro =>
livro.titulo.toLowerCase().includes(termo) // Filtra pelo título
);
exibirLivros(livrosFiltrados); // Exibe os livros filtrados
}