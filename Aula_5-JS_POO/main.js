const Cliente = require('./Cliente');

let lstClientes = [];
lstClientes.push(new Cliente("Cliente 1", 20));
lstClientes.push(new Cliente("Cliente 2", 30));
lstClientes.push(new Cliente("Cliente 3", 40));
lstClientes.push(new Cliente("Cliente 4", 50));

function MostrarClientes() {
    for (let item of lstClientes) {
        item.imprimir();
    }
}

MostrarClientes();


