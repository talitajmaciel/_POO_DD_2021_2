class Pessoa {
    nome: string;
  
    constructor(nome: string) {
        this.nome = nome;
    }
  
    public toString() {
        return this.nome;
    }
  
}

class Mercantil {
    caixas: Array<Pessoa | null>; //Caixas do mercantil
    esperando: Array<Pessoa>; //Fila de espera dos clientes
  
    //Construtor da classe repassando como parâmetro a quantidade de caixas que terá
    constructor(qtdCaixas: number) {
        this.caixas = []; //Tamanho inicial 0
        for (let i = 0; i < qtdCaixas; i++) {
            this.caixas.push(null);
        }
        this.esperando = [];
    }

    //Método para adicionar o cliente na fila de espera
    chegar(pessoa: Pessoa): void {
        this.esperando.push(pessoa);
    }

    //Método responsável por chamar o cliente ao caixa 
    chamarNoCaixa(indice: number): boolean {
        if(indice < 0 || indice >= this.caixas.length) { //Se o índice for diferente aos dos caixas já existentes, retornará que é inválido
            console.log("Indice invalido!");
            return false;
        }
        if(this.caixas[indice] != null) { //Não vazio
            console.log("Caixa está ocupado!");
            return false;
        }
        if(this.esperando.length == 0) { //Vazio
            console.log("Não tem ninguém esperando!");
            return false;
        }
        this.caixas[indice] = this.esperando.shift(); //Removendo da fila de espera e colocando o cliente no caixa  
        return true;
    }

    //Método responsável por terminar o atendimento ao cliente
    finalizarAtendimento(indice: number): Pessoa | null {
        if(indice >= this.caixas.length || indice < 0) { //Se o índice for diferente aos dos caixas já existentes, retornará que é inválido
          console.log("Indice invalido!");
          return null;  
        }
        if(this.caixas[indice] == null) { // Vazio
            console.log("Caixa está vazio!");
            return null;
        }
        let saindo = this.caixas[indice];
        this.caixas[indice] = null; // Caixa vazio, atendimento finalizado 
        return null;
    }


    //Impressão dos dados
    public toString() {
        let resultado = "Caixas -> ";
        for (let i = 0; i < this.caixas.length; i++) {
            resultado += i + ": ";
            
            if (this.caixas[i] == null) {
                resultado += "vazio";
            } 
            else {
                resultado += this.caixas[i].toString();
            }
            resultado += " | ";
          
        }
        resultado += "\nFila de espera: "; // \n vai para a linha seguinte
        for (let cliente of this.esperando) {
            resultado += cliente.toString() + " ";
        }
        return resultado;
    }
}

let mercantil = new Mercantil(2);

mercantil.chegar(new Pessoa("Talita"));
mercantil.chegar(new Pessoa("Davi"));
mercantil.chegar(new Pessoa("Nicole"));

console.log("" + mercantil);

mercantil.chamarNoCaixa(0); //Vai chamar o primeiro da fila de espera
mercantil.chamarNoCaixa(1); //Vai chamar o segundo da fila de espera

console.log("" + mercantil);

mercantil.chamarNoCaixa(0); //Já vai ter alguém nesse caixa

mercantil.finalizarAtendimento(0); //Finalizando o antedimento para desoculpar esse caixa
mercantil.chamarNoCaixa(0); //Agora o cliente pode ser atendido
console.log("" + mercantil);