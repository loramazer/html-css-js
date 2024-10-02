// Função para salvar o nome no SessionStorage
function saveName() {
let nameInput = document.getElementById("name").value;
if (nameInput) {
sessionStorage.setItem("userName", nameInput); // Armazena o nome no SessionStorage
displayGreeting(); // Atualiza a saudação com o nome salvo
}
}
// Função para exibir uma saudação com o nome armazenado no SessionStorage
function displayGreeting() {
let storedName = sessionStorage.getItem("userName"); // Recupera o nome do SessionStorage
if (storedName) {
document.getElementById("greeting").textContent = "Olá, " + storedName + "! Seja bem-vindo.";
} else {
document.getElementById("greeting").textContent = ""; // Limpa a saudação se não houver
nome
}
}
// Chama a função para verificar se já existe um nome salvo no SessionStorage ao carregar a página
window.onload = function() {
displayGreeting();
};