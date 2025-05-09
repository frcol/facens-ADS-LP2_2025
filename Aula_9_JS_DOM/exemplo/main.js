let listaClientes = [];

AtualizarLista();

function adicionarCliente() {
    let nome = document.querySelector('#nome').value;
    let idade = document.querySelector('#idade').value;
   
    let cliente = {
        nome: nome,
        idade: idade,
    }

    listaClientes.push(cliente);
    AtualizarLista();
}

function AtualizarLista() {
    let lista = document.querySelector('#listaClientes');

    lista.innerHTML = '';

    listaClientes.forEach((cliente, index) => {
        lista.innerHTML += 
        `<li id="${index}">${cliente.nome} <button class="delete" onClick="apagar('${index}')">Apagar</button></li>`;

        if (cliente.idade >= 18) {
            document.getElementById(index).style.color = 'red';
        }
    });

    document.querySelector('#nome').value = '';
    document.querySelector('#idade').value = '';
}

function apagar(index) {
    listaClientes.splice(index, 1);

    AtualizarLista();
}