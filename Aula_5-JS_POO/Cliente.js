class Cliente {
    #nome;
    #idade;

    constructor(_nome, _idade) {
        this.#nome = _nome;
        this.#idade = _idade;
    }

    get nome() {
        return this.#nome;
    }

    set nome(_nome) {
        this.#nome = _nome;
    }

    get idade() {
        return this.#idade;
    }

    set idade(_idade) {
        this.#idade = _idade;
    }
    
    imprimir() {
        console.log(`Nome:${this.#nome} Idade: ${this.#idade}`);
    }
}

module.exports = Cliente;