let ocupacaoStatus = {
    individual: 'Disponível',
    duplo: 'Disponível',
    triplo: 'Disponível',
    familiar: 'Disponível'
};

function fazerReserva() {
    const nome = document.getElementById('nome').value;
    const quarto = document.getElementById('quarto').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    if (nome && quarto && checkin && checkout) {
        alert(`Reserva feita para ${nome} no quarto ${quarto}.\nCheck-In: ${checkin}\nCheck-Out: ${checkout}`);
        ocupacaoStatus[quarto] = 'Reservado';
        atualizarOcupacao(quarto);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function atualizarOcupacao(quarto) {
    document.getElementById(`ocupacao-${quarto}`).textContent = ocupacaoStatus[quarto];
}

function checkIn() {
    const nome = document.getElementById('checkin-nome').value;
    if (nome) {
        // Simular o check-in no quarto reservado
        const quarto = Object.keys(ocupacaoStatus).find(q => ocupacaoStatus[q] === 'Reservado');
        if (quarto) {
            ocupacaoStatus[quarto] = 'Check-In Realizado';
            alert(`Check-in realizado para ${nome} no quarto ${quarto}.`);
            atualizarOcupacao(quarto);
        } else {
            alert('Nenhuma reserva encontrada para check-in.');
        }
    } else {
        alert('Por favor, insira o nome do hóspede.');
    }
}

function checkOut() {
    const nome = document.getElementById('checkin-nome').value;
    if (nome) {
        const quarto = Object.keys(ocupacaoStatus).find(q => ocupacaoStatus[q] === 'Check-In Realizado');
        if (quarto) {
            ocupacaoStatus[quarto] = 'Check-Out Realizado';
            alert(`Check-out realizado para ${nome} no quarto ${quarto}.`);
            atualizarOcupacao(quarto);
        } else {
            alert('Nenhum check-in encontrado para este hóspede.');
        }
    } else {
        alert('Por favor, insira o nome do hóspede.');
    }
}

function gerarRelatorio() {
    document.getElementById('relatorio').innerHTML = `
        <p>Ocupação Atual:</p>
        <ul>
            <li>Quarto Individual: ${ocupacaoStatus.individual}</li>
            <li>Quarto Duplo: ${ocupacaoStatus.duplo}</li>
            <li>Quarto Triplo: ${ocupacaoStatus.triplo}</li>
            <li>Quarto Familiar: ${ocupacaoStatus.familiar}</li>
        </ul>
    `;
}

