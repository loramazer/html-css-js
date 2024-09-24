document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();//Evita o envio padrão do formulario
    //Captura de dados do formulário
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const qtd_noites = document.getElementById('qtd_noites').value;
    //Cria objeto com dados
    const hospede = {
        nome: nome,
        endereco: endereco,
        qtd_noites: qtd_noites
};

hospedes.push();
adicionarNaTabela(hospede);

document.getElementById('form').reset();

function adicionarNaTabela (hospede){
    const tbody = document.querySelector('#tabelaHospedes tbody');
    const tr = document.createElement('tr');
}
    //Converte objeto para JSON
    const dados_json = JSON.stringify(dados);
}