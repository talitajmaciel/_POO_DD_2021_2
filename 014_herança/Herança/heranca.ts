class Animal { // Pessoa
    private alive: boolean = true;
    private type: string = "";

    constructor(type: string) {
        this.type = type;
    }

    // public setAlive(alive: boolean): void { // usando isso eu mudaria o status de vivo para morto
    //    this.alive = alive;
    //}

    public isAlive(): boolean {
        return this.alive;
    }

    public kill(): void {
        console.log("Matando " + this.type);
        this.alive = false;
    }

    public getType(): string {
        return this.type;
    }

    public toString() {
        return this.type + ":" + (this.alive ? "alive" : "dead");
    }
}

class Pet extends Animal { // Caçadora extends Pessoa
    protected nome: string;
    constructor(nome: string, type: string) {
        super(type);
        this.nome = nome;
    }

    public brincar() {
        if(this.isAlive()){
            console.log("Brincando com " + this.nome);
        } else {
            console.log("Por favor, me enterre!");
        }
    }

    // sobrescrita do método toString
    public toString() {
        return this.nome + ":" + this.getType() + ":" + (this.isAlive() ? "alive" : "dead");
    }
}

class Cat extends Pet { // RaynaCruz extends Caçadora
    private vidas: number;
    constructor(nome: string, vidas: number){
        super(nome, "gato");
        this.vidas = vidas;
    }

    public brincar() {
        if(this.isAlive()){
            console.log("Brincando com " + this.nome);
        } else {
            console.log("Espero esta empalhado!");
        }
    }

    public kill() {
        if(!this.isAlive()){ // 0 vidas
            console.log("Esse gato esta morto")
        } else if(this.vidas > 1){ // + de 1 vida, tenta de novo
            console.log("Perdeu uma vida "); // + ":" + this.vidas);
            this.vidas--;
        } else { // tem 1 vida
            super.kill(); // se ele tiver 1 vida chamo o kill da classe pai que o mata de uma vez
            this.vidas--; // faço vidas ir para 0
        }
    }

    public toString() {
        return super.toString() + ":" + this.vidas;
}

    main(): void {
    let lilo = new Cat("Lilo", 7); // "Rayna", "caçadora"
    lilo.brincar();
    lilo.kill();
    lilo.kill();
    lilo.kill();
    lilo.kill();
    lilo.kill();
    lilo.kill();
    lilo.kill();
    lilo.brincar();
    console.log(lilo.toString()); // imprimi de novo
 }
}