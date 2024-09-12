// Obtém o elemento <input> do campo de email
const emailInput =
document.getElementById('email');
const erroEmail =
document.getElementById('erroEmail');
// Obtém o formulário
const form =
document.getElementById('meuFormulario');
// Adiciona o evento de submit no formulário
form.addEventListener('submit', function(event) {
// Usando HTMLInputElement para verificar a
validade
if (!emailInput.validity.valid) {
// Exibe uma mensagem de erro se o camponão for válido
erroEmail.textContent = 'Por favor, insira um email válido.';
emailInput.classList.add('invalid');
// Impede o envio do formulário
event.preventDefault();
} else {
// Se o campo for válido, remove qualquer mensagem de erro e estilo inválido
erroEmail.textContent = '';
emailInput.classList.remove('invalid');
}
});