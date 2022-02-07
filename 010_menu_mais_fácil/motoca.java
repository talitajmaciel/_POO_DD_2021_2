class Pessoa {
    String nome;
    int idade;

    public Pessoa(String nome, int idade){ // não é método, é invocado automaticamente na criação
        this.nome = nome;
        this.idade = idade;

    }
}

public class Motoca {
 Pessoa pessoa;
 int potencia;
 int tempo;

 public Motoca(int potencia){
  this.potencia = potencia;
 }
 
 void embarcar(Pessoa pessoa) { // agregação
		if(this.pessoa == null){
			this.pessoa = new Pessoa(nome, idade);
        } else {
			System.out.println("Ja tem gente na motoca, espere sua vez!");
        }
 }

 void pagar(int value){
  this.tempo += value;
 }
 
 void desembarcar() {
    if(this.pessoa != null){
    this.pessoa = null;
    } else {
    System.out.println("Nao tem ninguem na moto");
    }
 }

 void dirigir(int tempo){
   if(this.pessoa == null){
    System.out.println("Nao tem ninguem na moto");
   } else if(this.pessoa.idade < 2){
    System.out.println("Muito pequeno para andar de moto");
   } else if(this.pessoa.idade > 10){
    System.out.println("Muito grande para andar de moto");
   } else {
    System.out.println(this.pessoa.nome + this.pessoa.idade + ": Run Run Run");
   }
   if(this.tempo == tempo){
    System.out.println("Ha minutos, pode passear");
   } else if(this.tempo > tempo)
    System.out.println("Para continuar andando compre mais minutos, voce ja andou " + this.tempo -= tempo);
    return;
   } else {
    System.out.println(this.pessoa.nome + " " + this.fazerBarulho());
   }
 }

 String fazerBarulho(){
  String out = "p";
  for(int i = 0; i < this.potencia; i++)
   out += "e";
  return out + "m";
 }

 class IO {
    create_kid(): Pessoa {
        write("Digite o nome da sua criança: ");
        let nome = input();
        write("Digite a potencia da motoca: ");
        let saciedadeMax = +input();
        let kid = new Pessoa(nome,potencia);
        return kid;
    }

    mostrar_help() {
        write("Comandos:\n");
        write("  init <nome> <potencia>: cria uma nova crianca\n");
        write("  embarcar: faz crianca subir na motoca\n");
        write("  dirigir: faz a crianca dirigir a motoca\n");
        write("  desembarcar: faz a crianca descer da motoca\n");
        write("  pagar: faz a crianca comprar mais tempo\n");
        write("  end: faz a crianca desembarcar, para dar chance a outra crianca\n");
    }
}

shell() {
    let kid = new Pessoa("", 0);//this.create_pet();
    this.mostrar_help();
    while (true) {
        write("$ ");
        let line = input();
        let words = line.split(" ");
        if (words[0] == "end") {
            break;
        } else if (words[0] == "help") {
            this.mostrar_help();
        } else if (words[0] == "embarcar") {
            int idade = Integer.parseInt(ui[2]);
            motoca.embarcar(new Pessoa(ui[1], idade));
        } else if (words[0] == "dirigir") {
            motoca.dirigir(Integer.parseInt(ui[1]));
        } else if (words[0] == "desembarcar") {
            motoca.desembarcar();
        }else if(ui[0].equals("pagar")) {
            motoca.pagar(Integer.parseInt(ui[1]));
        } else if (words[0] == "init") {
            let nome = words[1];
            let potencia = +words[2];
            kid = new Pessoa(nome, potencia);
        } else {
            console.log("Comando invalido");
        }
    }
}
}

let io = new IO();
io.shell();