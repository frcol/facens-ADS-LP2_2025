const Automovel = require('./Automovel');
const Pessoa = require('./Pessoa');

// =========================================================
class Main {
    #pessoas;

    constructor() {
        this.#pessoas = [];
    }

    // Função para criar uma pessoa
    addPessoa(pessoa) {
        this.#pessoas.push(pessoa);
    }

    addAutomovelPessoa(codPessoa, codAuto, marca, modelo) {     
        let pessoa = this.#pessoas.find(p => p.codigo === codPessoa);
        
        if (!pessoa) {
            console.log("## [addAutomovelPessoa] Pessoa não encontrada ##");
            return
        }

        pessoa.inserirAutomovel(new Automovel(codAuto, marca, modelo));
    }

    mostrarTodasAsPessoas() {
        let resultado = "Pessoas:\n";

        this.#pessoas.forEach(pessoa => {
            resultado += `${pessoa.imprimirCompleto()}\n\n`;
        });

        console.log(resultado);
    }
    

    transfereAutomovel(codPessoaOrigem, codPessoaDestino, codAutomovel) {
        let pessoaOrigem = this.#pessoas.find(p => p.codigo === codPessoaOrigem);
        let pessoaDestino = this.#pessoas.find(p => p.codigo === codPessoaDestino);

        if (!pessoaOrigem || !pessoaDestino) {
            console.log("## Pessoa não encontrada ##");
            return;
        }

        let automovel = pessoaOrigem.getAutomovel(codAutomovel);
        if (!automovel) {
            console.log("## Automóvel não encontrado ##");
            return;
        }

        pessoaDestino.inserirAutomovel(automovel);
        pessoaOrigem.removerAutomovelByCod(automovel.codigo);
    }
}


const main = new Main();
main.addPessoa(new Pessoa(1, "João"));
main.addPessoa(new Pessoa(2, "Maria"));

main.addAutomovelPessoa(1, 1, "Fiat", "Uno");
main.addAutomovelPessoa(1, 2, "Volkswagen", "Fusca");

main.mostrarTodasAsPessoas();

main.transfereAutomovel(1, 2, 1);

main.mostrarTodasAsPessoas();