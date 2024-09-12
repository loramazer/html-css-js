// Obtém o formulário, campo de email e a área para mostrar a mensagem de erro
const form = document.getElementById("meuFormulario");
const email = document.getElementById("email");
const erroEmail = document.getElementById("erroEmail");
const erroSenha = document.getElementById("erroSenha");
let nome = document.getElementById("nome");
let senha = document.getElementById("senha");
let telefone =  document.getElementById("telefone");
// Adiciona um listener para o evento de submissão do formulário
form.addEventListener("submit", function(event) {
// Se o email não for válido, exibe a mensagem de erro e impede o envio
if (!email.checkValidity()) {
erroEmail.textContent = "Por favor, insira um email válido.";
email.classList.add("invalid");
event.preventDefault(); // Impede o envio do formulário se for inválido
} else {
erroEmail.textContent = ""; // Limpa a mensagem de erro se for válido
email.classList.remove("invalid");
}
});