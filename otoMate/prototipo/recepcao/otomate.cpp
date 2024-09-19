#include <iostream>
#include <string>
#include <vector>
#include <ctime>
#include <fstream> 
#include <random> 

using namespace std;

// Estrutura para representar um quarto
struct Quarto {
    int numero;
    string tipo;
    int capacidade;
    double preco;
    bool ocupado;
    string status; //  "Livre", "Reservado", "Ocupado"
    int reserva_ativa; // Armazena o número da reserva ativa, se houver
};

// Estrutura para representar uma reserva
struct Reserva {
    int numero_reserva; 
    int numero_quarto;
    string nome_hospede;
    string data_checkin;
    string data_checkout;
    bool cancelada;
};

// Funções para manipulação de quartos
vector<Quarto> quartos;

void inicializarQuartos() {
    // Quartos individuais
    for (int i = 101; i <= 105; i++) {
        Quarto quarto;
        quarto.numero = i;
        quarto.tipo = "Individual";
        quarto.capacidade = 1;
        quarto.preco = 100.0; // Preço exemplo
        quarto.ocupado = false;
        quartos.push_back(quarto);
    }

    // Quartos duplos
    for (int i = 201; i <= 204; i++) {
        Quarto quarto;
        quarto.numero = i;
        quarto.tipo = "Duplo";
        quarto.capacidade = 2;
        quarto.preco = 150.0; // Preço exemplo
        quarto.ocupado = false;
        quartos.push_back(quarto);
    }

    // Quartos triplos
    for (int i = 301; i <= 303; i++) {
        Quarto quarto;
        quarto.numero = i;
        quarto.tipo = "Triplo";
        quarto.capacidade = 3;
        quarto.preco = 200.0; // Preço exemplo
        quarto.ocupado = false;
        quartos.push_back(quarto);
    }

    // Quartos familiares
    for (int i = 401; i <= 402; i++) {
        Quarto quarto;
        quarto.numero = i;
        quarto.tipo = "Familiar";
        quarto.capacidade = 4;
        quarto.preco = 250.0; // Preço exemplo
        quarto.ocupado = false;
        quartos.push_back(quarto);
    }

    // Suíte master
    Quarto quarto;
    quarto.numero = 501;
    quarto.tipo = "Suite Master";
    quarto.capacidade = 5;
    quarto.preco = 300.0; // Preço exemplo
    quarto.ocupado = false;
    quartos.push_back(quarto);

    for (Quarto& q : quartos) {
        q.status = "Livre"; 
        q.reserva_ativa = 0; // Inicializar o número da reserva como 0
    }
}

// Funções para manipulação de reservas
vector<Reserva> reservas;

int gerarNumeroReserva() {
    random_device rd;  
    mt19937 generator(rd()); 
    uniform_int_distribution<int> distribution(1000, 9999); 
    return distribution(generator);
}

void fazerReserva() {
    int escolha;
    cout << "Escolha o tipo de quarto:\n";
    cout << "1. Individual\n";
    cout << "2. Duplo\n";
    cout << "3. Triplo\n";
    cout << "4. Familiar\n";
    cout << "5. Suite Master\n";
    cout << "Opção: ";
    cin >> escolha;

    // Encontrar um quarto do tipo escolhido (simplificado)
    Quarto* quarto = nullptr;
    for (Quarto& q : quartos) {
        if (q.tipo == "Individual" && escolha == 1 && !q.ocupado) {
            quarto = &q;
            break;
        } else if (q.tipo == "Duplo" && escolha == 2 && !q.ocupado) {
            quarto = &q;
            break;
        } else if (q.tipo == "Triplo" && escolha == 3 && !q.ocupado) {
            quarto = &q;
            break;
        } else if (q.tipo == "Familiar" && escolha == 4 && !q.ocupado) {
            quarto = &q;
            break;
        } else if (q.tipo == "Suite Master" && escolha == 5 && !q.ocupado) {
            quarto = &q;
            break;
        }
    }

    if (quarto == nullptr) {
        cout << "Nao há quartos do tipo escolhido disponiveis.\n";
        return;
    }

    Reserva novaReserva;
    novaReserva.numero_reserva = gerarNumeroReserva(); // Gerar o número de reserva
    novaReserva.numero_quarto = quarto->numero;
    cout << "Digite o nome do hospede: ";
    cin.ignore(); 
    getline(cin, novaReserva.nome_hospede);
    cout << "Digite a data de check-in (AAAA-MM-DD): ";
    cin >> novaReserva.data_checkin;
    cout << "Digite a data de check-out (AAAA-MM-DD): ";
    cin >> novaReserva.data_checkout;
    novaReserva.cancelada = false;
    reservas.push_back(novaReserva);
    quarto->ocupado = true; 
    cout << "Reserva realizada com sucesso! Seu numero de reserva é: " << novaReserva.numero_reserva << endl;

      for (Quarto& q : quartos) {
        if (q.numero == novaReserva.numero_quarto) {
            q.status = "Reservado";
            q.reserva_ativa = novaReserva.numero_reserva; // Armazena o número da reserva
            break;
        }
    }
}

void realizarCheckin() {
    int numReserva;
    cout << "Digite o numero da reserva para realizar o check-in: ";
    cin >> numReserva;

    // Encontrar a reserva
    Reserva* reserva = nullptr;
    for (Reserva& r : reservas) {
        if (r.numero_reserva == numReserva) {
            reserva = &r;
            break;
        }
    }

    if (reserva == nullptr) {
        cout << "Reserva não encontrada.\n";
        return;
    }

    if (reserva->cancelada) {
        cout << "Reserva foi cancelada.\n";
        return;
    }

    // Encontrar o quarto e atualizar o status para "Ocupado"
    for (Quarto& q : quartos) {
        if (q.numero == reserva->numero_quarto) {
            q.ocupado = true; // Define o quarto como ocupado
            q.status = "Ocupado"; 
            q.reserva_ativa = reserva->numero_reserva; 
            break;
        }
    }

    cout << "Check-in realizado com sucesso!\n";
}

void realizarCheckout() {
    int numReserva;
    cout << "Digite o numero da reserva para realizar o check-out: ";
    cin >> numReserva;

    // Encontrar a reserva
    Reserva* reserva = nullptr;
    for (Reserva& r : reservas) {
        if (r.numero_reserva == numReserva) {
            reserva = &r;
            break;
        }
    }

    if (reserva == nullptr) {
        cout << "Reserva não encontrada.\n";
        return;
    }

    if (reserva->cancelada) {
        cout << "Reserva foi cancelada.\n";
        return;
    }

    // Encontrar o quarto e atualizar o status para "Livre"
    for (Quarto& q : quartos) {
        if (q.numero == reserva->numero_quarto) {
            q.ocupado = false;
            q.status = "Livre"; 
            q.reserva_ativa = 0; 
            break;
        }
    }

    cout << "Check-out realizado com sucesso!\n";
}

void cancelarReserva() {
    int numReserva;
    cout << "Digite o numero da reserva para cancelar: ";
    cin >> numReserva;

    // Encontrar a reserva
    Reserva* reserva = nullptr;
    for (Reserva& r : reservas) {
        if (r.numero_reserva == numReserva) {
            reserva = &r;
            break;
        }
    }

    if (reserva == nullptr) {
        cout << "Reserva nao encontrada.\n";
        return;
    }

    if (reserva->cancelada) {
        cout << "Reserva ja foi cancelada.\n";
        return;
    }

    reserva->cancelada = true;

    // Encontrar o quarto e atualizar o status para "Livre" e `ocupado` para `false`
    for (Quarto& q : quartos) {
        if (q.numero == reserva->numero_quarto) {
            q.status = "Livre";
            q.ocupado = false; 
            q.reserva_ativa = 0; 
            break;
        }
    }

    cout << "Reserva cancelada com sucesso!\n";
}

void visualizarReserva() {
    int numReserva;
    cout << "Digite o numero da reserva para visualizar: ";
    cin >> numReserva;

    // Encontrar a reserva
    Reserva* reserva = nullptr;
    for (Reserva& r : reservas) {
        if (r.numero_reserva == numReserva) {
            reserva = &r;
            break;
        }
    }

    if (reserva == nullptr) {
        cout << "Reserva nao encontrada.\n";
        return;
    }

    // Encontrar o quarto e obter o status
    for (Quarto& q : quartos) {
        if (q.numero == reserva->numero_quarto) {
            cout << "\n----------------------------------------\n";
            cout << "  Dados da Reserva:\n";
            cout << "----------------------------------------\n";
            cout << "Numero da Reserva: " << reserva->numero_reserva << endl;
            cout << "Nome do Hospede: " << reserva->nome_hospede << endl;
            cout << "Quarto: " << reserva->numero_quarto << endl;
            cout << "Tipo de Quarto: " << q.tipo << endl; 
            cout << "Capacidade: " << q.capacidade << endl; 
            cout << "Status: " << q.status << endl; 
            cout << "Data de Check-in: " << reserva->data_checkin << endl;
            cout << "Data de Check-out: " << reserva->data_checkout << endl;
            cout << "----------------------------------------\n";
            break;
        }
    }
}

void visualizarOcupacao() {
    cout << "\n----------------------------------------\n";
    cout << "  Ocupacao dos Quartos:\n";
    cout << "----------------------------------------\n";
    for (const Quarto& quarto : quartos) {
        cout << "Quarto " << quarto.numero << ": " << quarto.status;
        if (quarto.reserva_ativa != 0) {
            cout << " (Reserva: " << quarto.reserva_ativa << ")";
        }
        cout << endl;
    }
    cout << "----------------------------------------\n";
}

// Função principal do programa
int main() {
    // Inicializar os quartos
    inicializarQuartos();

    // Menu principal do sistema
    int opcao;
    do {
        cout << "\n----------------------------------------\n";
        cout << "  Sistema do Hotel Oto Mate\n";
        cout << "----------------------------------------\n";
        cout << "1. Fazer Reserva\n";
        cout << "2. Realizar Check-in\n";
        cout << "3. Realizar Check-out\n";
        cout << "4. Cancelar Reserva\n";
        cout << "5. Visualizar Reserva\n";
        cout << "6. Visualizar Ocupao\n";
        cout << "0. Sair\n";
        cout << "Opcao: ";
        cin >> opcao;

        switch (opcao) {
            case 1:
                fazerReserva();
                break;
            case 2:
                realizarCheckin();
                break;
            case 3:
                realizarCheckout();
                break;
            case 4:
                cancelarReserva();
                break;
            case 5:
                visualizarReserva();
                break;
            case 6:
                visualizarOcupacao();
                break;
            case 0:
                cout << "Saindo do sistema...\n";
                break;
            default:
                cout << "Opcao invalida!\n";
        }

        // Salvar dados dos quartos e reservas em arquivo
        // ... (implementar salvarDados)

    } while (opcao != 0);

    return 0;
}

// Funções para salvar e carregar dados em arquivo (implementar)
void salvarDados() {
    // ... (salvar dados dos quartos e reservas em um arquivo)
}

void carregarDados() {
    // ... (carregar dados dos quartos e reservas de um arquivo)
}