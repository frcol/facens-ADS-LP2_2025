const ContaBancaria = require('./ContaBancaria');

const conta = new ContaBancaria(100);

conta.depositar(50);
console.log(conta.saldo);

conta.sacar(35);
console.log(conta.saldo);
