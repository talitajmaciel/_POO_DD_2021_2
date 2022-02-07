class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
    public toString() {
        return this.nome;
    }
}

class Banco {
    caixas: Array<Pessoa | null>;
    espera: Array<Pessoa>;

    constructor(qtdCaixas: number) {
        this.caixas = []; //length 0
        for (let i = 0; i < qtdCaixas; i++) {
            this.caixas.push(null);
        }
        this.espera = [];
    }

    //coloca a pessoa na fila de espera
    chegarPessoa(pessoa: Pessoa): void {
        this.espera.push(pessoa);
    }

    // se esse indice existe
    // se o caixa estiver vazio e tiver alguem na fila de espera
    // move a pessoa da fila para o caixa e retorna true
    chamarNoCaixa(indice: number): boolean {
        if(indice < 0 || indice >= this.caixas.length) {
            console.log("indice invalido");
            return false;
        }
        if(this.caixas[indice] != null) {
            console.log("caixa ocupado");
            return false;
        }
        if(this.espera.length == 0) {
            console.log("fila vazia");
            return false;
        }
        this.caixas[indice] = this.espera.shift();
        return true;
    }

    //se o caixa estiver ocupado, retira a pessoa do caixa
    finalizarAtendimento(indice: number): Pessoa | null {
        if(indice < 0 || indice >= this.caixas.length) {
          console.log("indice invalido");
          return null;  
        }
        if(this.caixas[indice] == null) {
            console.log("caixa vazio");
            return null;
        }
        let vaiSair = this.caixas[indice];
        this.caixas[indice] = null;
        return null;
    }

    removerPorNome(nome: string): Pessoa | null {
        for(let i = 0; i < this.caixas.length; i++) {
            let pessoa = this.caixas[i];
            if(pessoa != null && pessoa.nome == nome){
                this.caixas[i] = null;
                return pessoa;
            }
        }
        for(let i = 0; i < this.espera.length; i++) {
            let pessoa = this.espera[i];
            if(pessoa.nome == nome) {
                this.espera.splice(i, 1);
                return pessoa;
            }
        }
        return null;
    }

    public toString() {
        let str = "caixas: | ";
        for (let i = 0; i < this.caixas.length; i++) {
            let pessoa = this.caixas[i];
            str += i + ": ";
            //str += pessoa !== null ? pessoa.toString : "----";
            if (pessoa == null) {
                str += "vazio";
            } else {
                str += pessoa.toString();
            }
            str += " |";
        }
        str += "\nespera: ";
        for (let pessoa of this.espera) {
            str += pessoa.toString() + " ";
        }
        return str;
    }
}

let banco = new Banco(3);
console.log("" + banco);
banco.chegarPessoa(new Pessoa("Joao"));
console.log("" + banco);
banco.chegarPessoa(new Pessoa("Ricardo"));
banco.chegarPessoa(new Pessoa("Josue"));
banco.chamarNoCaixa(0);
banco.chamarNoCaixa(2);
banco.chamarNoCaixa(1);
banco.chamarNoCaixa(0); //errado, ja tem alguem no caixa