// Validação de telefone com DDD e/ou formatação
function validarTelefone(telefone) {
// Aceita DDD (opcional), com ou sem parênteses, traço e espaços
let regex = /^(\(\d{2}\)\s?)?\d{4,5}-?\d{4}$/;
return regex.test(telefone);
}

// Função para validar email usando regex
function validarEmail(email) {
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
}
// Função para validar senha (letras e números, no mínimo 6 caracteres)
function validarSenha(senha) {
let regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;
return regex.test(senha);
}
// Função que valida o formulário
function validarFormulario() {
let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let senha = document.getElementById("senha").value;
let telefone = document.getElementById("telefone").value;
// Validação de campos
if (nome === "") {
alert("Por favor, preencha o campo de nome.");
return false;
}
if (email === "" || !validarEmail(email)) {
alert("Por favor, insira um email válido.");
return false;
}
if (senha === "" || !validarSenha(senha)) {
alert("A senha deve ter pelo menos 6 caracteres, contendo letras e números.");
return false;
}
if (telefone === "" || validarTelefone(telefone)) {
alert("Por favor, preencha o campo de telefone.");
return false;
}
// Se todas as validações forem bem-sucedidas
return true;
}