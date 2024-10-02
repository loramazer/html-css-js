// Função para salvar o nome no LocalStorage
function saveName() {
let nameInput = document.getElementById("name").value;
if (nameInput) {
localStorage.setItem("userName", nameInput); // Armazena o nome no
LocalStorage
displayGreeting(); // Atualiza a saudação com o nome salvo
}
}
// Função para exibir uma saudação com o nome armazenado no LocalStorage
function displayGreeting() {
let storedName = localStorage.getItem("userName"); // Recupera o nome do LocalStorage
if (storedName) {
document.getElementById("greeting").textContent = "Olá, " + storedName + "! Seja bem-vindo.";
} else {
document.getElementById("greeting").textContent = ""; // Limpa a saudação se não houver nome
}
}
// Chama a função para verificar se já existe um nome salvo no LocalStorage ao carregar a página
window.onload = function() {
displayGreeting();
};