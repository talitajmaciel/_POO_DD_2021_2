class Pessoa { 
    private alive: boolean = true;
    private gender: string = "";

    constructor(gender: string) {
        this.gender = gender;
    }

    public setAlive(alive: boolean): void { // usando isso eu mudaria o status de vivo para morto
        this.alive = alive;
    }

    public isAlive(): boolean {
        return this.alive;
    }

    public kill(): void {
        console.log("Matando " + this.gender);
        this.alive = false;
    }

    public getGender(): string {
        return this.gender;
    }

    public toString() {
        return this.gender + ":" + (this.alive ? "alive" : "dead");
    }
}

class Caçadora extends Pessoa { // Caçadora extends Pessoa
    protected nome: string;
    constructor(nome: string, gender: string) {
        super(gender);
        this.nome = nome;
    }

    public perseguir() {
        if(this.isAlive()){
            console.log("Perseguindo a " + this.nome);
        } else {
            console.log("Por favor, me enterre!");
        }
    }

    // sobrescrita do método toString
    public toString() {
        return this.nome + ":" + this.getGender() + ":" + (this.isAlive() ? "alive" : "dead");
    }
}

class RaynaCruz extends Caçadora { 
    private vidas: number;
    constructor(nome: string, vidas: number){
        super(nome, "mulher");
        this.vidas = vidas;
    }

    public perseguir() {
        if(this.isAlive()){
            console.log("Perseguindo a " + this.nome);
        } else {
            console.log("Espero que seja a minha ultima vida, ou a espada da fenix marcara voce!");
        }
    }

    public kill() {
        if(!this.isAlive()){ // 0 vidas
            console.log("A caçadora esta morta")
        } else if(this.vidas > 1){ // + de 1 vida, tenta de novo
            console.log("Perdeu uma vida "); 
            this.vidas--;
        } else { // tem 1 vida
            super.kill(); // se ela tiver 1 vida chamo o kill da classe pai que a mata de uma vez
            this.vidas--; // faço vidas ir para 0
        }
    }

    public toString() {
        return super.toString() + ":" + this.vidas;
}

    public static main(): void  {
    let rayna = new RaynaCruz("Rayna", 7); 
    rayna.perseguir();
    rayna.kill();
    rayna.kill();
    rayna.kill();
    rayna.kill();
    rayna.kill();
    rayna.kill();
    rayna.kill();
    console.log(rayna.toString()); // imprimir
 }
}