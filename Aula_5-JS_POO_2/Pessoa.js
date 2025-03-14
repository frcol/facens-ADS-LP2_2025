class Pessoa {
    #nome;
    #cpf;

    constructor(_nome, _cpf) {
        this.#nome = _nome;
        this.#cpf = _cpf;
    }

    get nome() {
        return this.#nome;
    }

    set nome(_nome) {
        this.#nome = _nome;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(_cpf) {
        this.#cpf = _cpf;
    }

    // ================================================
    imprimir() {
        console.log(`\n\nNome: ${this.#nome}\nCPF: ${this.#cpf}\n\n`);
    }
}

module.exports = Pessoa;