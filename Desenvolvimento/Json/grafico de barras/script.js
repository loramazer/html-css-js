// Função para carregar dados do arquivo JSON
fetch('dados.json')
.then(response => response.json())
.then(data => {
const meses = data.vendas.map(item => item.mes); // Extrai os meses
const quantidades = data.vendas.map(item => item.quantidade); // Extrai as quantidades
// Configuração do gráfico usando Chart.js
const ctx = document.getElementById('graficoVendas').getContext('2d');
const graficoVendas = new Chart(ctx, {
type: 'bar', // Tipo de gráfico (barras)
data: {
labels: meses, // Rótulos (meses)
datasets: [{
label: 'Vendas',
data: quantidades, // Dados (quantidade de vendas)
backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo das barras
borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
borderWidth: 1 // Largura da borda
}]
},
options: {
scales: {
y: {
beginAtZero: true // Começar o eixo Y em zero
}
}
}
});
})

.catch(error => console.error('Erro ao carregar dados JSON:', error));