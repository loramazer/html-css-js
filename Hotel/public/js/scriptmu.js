// Impede que símbolos e números sejam digitados no campo Nome
function validarNome(event) {
    const key = event.key;
    const regex = /^[a-zA-Z\s]*$/; // Permite apenas letras e espaços
    if (!regex.test(key)) {
        event.preventDefault();
    }
}

// Permite apenas números no campo CPF e Telefone
function validarNumeros(event) {
    const key = event.key;
    const regex = /^[0-9]*$/; // Permite apenas números
    if (!regex.test(key)) {
        event.preventDefault();
    }
}

// Valida o campo de endereço para não ter caracteres especiais
function validarEndereco(event) {
    const key = event.key;
    const regex = /^[a-zA-Z0-9\s]*$/; // Permite letras, números e espaços
    if (!regex.test(key)) {
        event.preventDefault();
    }
}

// Formata o campo de Data de Nascimento (DD/MM/AAAA)
function formatarDataNascimento(event) {
    const input = event.target;
    let valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (valor.length <= 2) {
        input.value = valor; // Dia
    } else if (valor.length <= 4) {
        input.value = `${valor.substring(0, 2)}/${valor.substring(2, 4)}`; // Dia/Mês
    } else {
        input.value = `${valor.substring(0, 2)}/${valor.substring(2, 4)}/${valor.substring(4, 8)}`; // Dia/Mês/Ano
    }
}

// Verifica se a data de nascimento é válida (após 1930 e formato correto)
function validarDataNascimento(event) {
    const input = event.target;
    const [dia, mes, ano] = input.value.split('/');

    if (ano < 1930 || dia > 31 || mes > 12) {
        alert("Data de nascimento inválida! Certifique-se de que o ano seja após 1930, dia até 31 e mês até 12.");
        input.value = "";
    }
}

// Impede que as datas de Check-Out sejam anteriores ao Check-In
function definirMinimaDataCheckout() {
    const dataCheckin = document.getElementById("dataCheckin");
    const dataCheckout = document.getElementById("dataCheckout");
    
    dataCheckin.addEventListener("change", function () {
        dataCheckout.min = dataCheckin.value; // Define a data mínima para Check-Out como a data de Check-In

        // Se a data de Check-Out for anterior à de Check-In, limpa o campo
        if (dataCheckout.value && new Date(dataCheckout.value) <= new Date(dataCheckin.value)) {
            alert("A data de Check-Out deve ser posterior à data de Check-In!");
            dataCheckout.value = "";
        }
    });

    dataCheckout.addEventListener("change", function () {
        if (new Date(dataCheckout.value) <= new Date(dataCheckin.value)) {
            alert("A data de Check-Out deve ser posterior à data de Check-In!");
            dataCheckout.value = "";
        }
    });
}

// Limita o comprimento máximo dos campos Nome, Email e Endereço
function limitarComprimentoMaximo(event) {
    const maxLength = 40;
    if (event.target.value.length > maxLength) {
        event.preventDefault();
        alert(`O campo ${event.target.id} deve ter no máximo ${maxLength} caracteres!`);
        event.target.value = event.target.value.substring(0, maxLength);
    }
}

// Função principal para inicializar as validações
function inicializarValidacoes() {
    // Seleciona os campos para validação
    const nomeInput = document.getElementById("nome");
    const cpfInput = document.getElementById("cpf");
    const telefoneInput = document.getElementById("telefone");
    const enderecoInput = document.getElementById("endereco");
    const emailInput = document.getElementById("email");
    const dataNascimentoInput = document.getElementById("dataNascimento");

    // Aplica validações nos campos específicos
    if (nomeInput) nomeInput.addEventListener("keypress", validarNome);
    if (cpfInput) cpfInput.addEventListener("keypress", validarNumeros);
    if (telefoneInput) telefoneInput.addEventListener("keypress", validarNumeros);
    if (enderecoInput) enderecoInput.addEventListener("keypress", validarEndereco);
    if (dataNascimentoInput) {
        dataNascimentoInput.addEventListener("input", formatarDataNascimento);
        dataNascimentoInput.addEventListener("blur", validarDataNascimento);
    }

    // Limita o comprimento máximo dos campos
    [nomeInput, emailInput, enderecoInput].forEach(input => {
        if (input) input.addEventListener("input", limitarComprimentoMaximo);
    });

    // Valida a data de Check-Out em relação à data de Check-In
    definirMinimaDataCheckout();
}

// Executa a função de inicialização ao carregar a página
window.onload = inicializarValidacoes;
