class ContaBancaria {
  #saldo = 0;

  constructor(saldoInicial=0) {
    if (saldoInicial) {
      this.#saldo = saldoInicial;
    }
  }

  depositar(valor) {
    this.#saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
      return true;
    }
    
    return false;
  }
  
  get saldo() {
    return this.#saldo;
  }
}

module.exports = ContaBancaria;