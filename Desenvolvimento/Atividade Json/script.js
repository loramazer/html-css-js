let hospedes = [];

document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();//Evita o envio padrão do formulario
    //Captura de dados do formulário
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const qtd_noites = document.getElementById('qtd_noites').value;
    //Cria objeto com dados
    const hospede = {
         nome,
         endereco,
         qtd_noites
};

hospedes.push(hospede);
adicionarNaTabela(hospede);

document.getElementById('form').reset();
});

function adicionarNaTabela (hospede){
    const tbody = document.querySelector('#tabelaHospedes tbody');
    const tr = document.createElement('tr');
     tr.innerHTML = `
        <td>${hospede.nome}</td>
        <td>${hospede.endereco}</td>
        <td>${hospede.qtd_noites}</td>
    `;
    tbody.appendChild(tr);
}

document.getElementById(`download`).addEventListener(`click`, function(){
    const jsonDados = JSON.stringify(hospedes, null, 2); //converte objetos para json
    const blob = new Blob([jsonDados], { type: 'application/json' }); //cria um arquivo json
    const url = URL.createObjectURL(blob); //cria link para download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dados.json';
    document.body.appendChild(link);
    link.click(); // clica no link
    document.body.removeChild(link); // remove link
});

