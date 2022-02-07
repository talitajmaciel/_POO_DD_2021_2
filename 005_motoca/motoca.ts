class Pessoa {
    name: string;
    age: number;
    
    constructor (name: string, age: number) {
      this.name = name;
      this.age = age;
    };
  
    toString() {
      return `name: ${this.name}, age: ${this.age}`;
      // $ onde vai colocar as variáveis
      // `` crase diz que a string tem que ser processada, avaliada
    };
  }
  
  class Moto {
    person: Pessoa;
    power: number;
    time: number;
  
    //Inicia o atributo power, time com zero e person com null
    constructor(power: number) {
      this.power = power;
      this.time = 0;
      this.person = null;  // inicia sem ninguém, pois a moto não cria a pessoa, apenas recebe
    };
  
    //Comprar mais tempo
    comprarTempo(time: number) {
      this.time += time;
    };
  
    //Se estiver vazio, coloca a pessoa na moto e retorna true
    subir(person: Pessoa) {
      if (!this.person) {
        this.person = person;
        return true;
      }
  
      return false
    };
    
    //Se houver uma person, retira e retorna
    //Se não, retorna null
    descer() {
      if (this.person) {
        const personInMotorcycle = this.person;
        this.person = null;
  
        return personInMotorcycle;
      }
  
      return null;
    };
  
    drive(time: number) {
      if (this.person && this.person.age <= 10) {
        this.time -= time; 
        console.log(`O tempo acabou e voce andou ${this.time} minutos.`);
      }
    };
    
    //buzinar
    honk() {
      console.log(`P${'e'.repeat(this.power)}m!`);
    };
  
    toString() {
      return `power: ${this.power}, time: ${this.time}}`;
    };
  }
  
  let moto = new Moto(1);
  console.log(moto);
  moto.honk();
  moto.subir(new Pessoa("marcos", 4));
  console.log(moto);
  moto.honk();
  moto.subir(new Pessoa("marisa", 2));
  console.log(moto);
  
  moto = new Moto(5);
  console.log(moto);
  moto.subir(new Pessoa("marcos", 4));
  console.log(moto);
  moto.honk();
  
  moto = new Moto(7);
  moto.subir(new Pessoa("heitor", 6));
  console.log(moto);
  const heitor = moto.descer();
  console.log(heitor);
  moto.descer();
  moto.subir(new Pessoa("suzana", 8));
  console.log(moto);
  
  moto = new Moto(7);
  moto.subir(new Pessoa("suzana", 8));
  moto.drive(10);
  moto.comprarTempo(40)
  console.log(moto);
  moto.drive(20)
  console.log(moto);
  
  moto = new Moto(7);
  moto.comprarTempo(20);
  moto.subir(new Pessoa("andreina", 23));
  moto.drive(15);
  console.log(`Muito grande para andar de moto!`);
  console.log(moto);
  
  moto = new Moto(7);
  moto.comprarTempo(20);
  moto.subir(new Pessoa("andreina", 6));
  moto.drive(15);
  console.log(moto);
  moto.drive(10);
  console.log(`Andou 5 minutos e acabou o tempo!`);