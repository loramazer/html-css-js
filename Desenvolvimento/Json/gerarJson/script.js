document.getElementById('formulario').addEventListener('submit', function(event) {
event.preventDefault(); // Evita o envio padrão do formulário
// Captura os dados do formulário
const nome = document.getElementById('nome').value;
const idade = document.getElementById('idade').value;
const cidade = document.getElementById('cidade').value;
// Cria um objeto com os dados
const dados = {
nome: nome,
idade: idade,
cidade: cidade
};
// Converte o objeto para JSON
const jsonDados = JSON.stringify(dados, null, 2);
// Cria um arquivo Blob do tipo JSON
const blob = new Blob([jsonDados], { type: 'application/json' });
// Cria uma URL para o arquivo Blob
const url = URL.createObjectURL(blob);
// Cria um link temporário para download
const link = document.createElement('a');
link.href = url;
link.download = 'dados.json'; // Nome do arquivo
document.body.appendChild(link); //adiciona um elemento (neste caso, um link)
link.click(); // Simula o clique no link para download
// Remove o link temporário
document.body.removeChild(link);
});