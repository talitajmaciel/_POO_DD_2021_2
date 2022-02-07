public class Tamagotchi {
    
    public class Bixinho{
     private int energy;
     private int energyMax;
     private int hungry;
     private int hungryMax;
     private int clean;
     private int cleanMax;
     private int diamonds;
     private int idade;
     private int idadeMax;
     private boolean vivo;
     
     public Bixinho (int energyMax, int hungryMax, int cleanMax, int idadeMax) {
        this.energy = energyMax;
        this.energyMax = energyMax;
        this.hungry = hungryMax;
        this.hungryMax = hungryMax;
        this.clean = cleanMax;
        this.cleanMax = cleanMax;
        this.diamonds = 0;
        this.idade = 0;
        this.idadeMax = idadeMax;
        this.vivo = true;
    }

     void setEnergy(int valor) {
         this.energy = valor;
         if (energy <= 0) {
             this.energy = 0;
             this.vivo = false;
          System.out.printIn("Seu Tamagotchi morreu de cansaco!");   
         }
         if (energy > energyMax) {
             energy = energyMax;
         }
         if (idade >= idadeMax) {
             this.idade = idadeMax;
             this.vivo = false;
             System.out.println("Seu Tamagotchi morreu de velhice!");
         }
     }

     void setHungry(int valor){
         this.hungry = valor;
         if (hungry <= 0) {
             this.hungry = 0;
             this.vivo = false;
             System.out.println("Seu Tamagotchi morreu de fome!");
         }
         if (hungry > hungryMax) {
             hungry = hungryMax;
         }
         if (idade >= idadeMax) {
             this.idade = idadeMax;
             this.vivo = false;
             System.out.println("Seu Tamagotchi morreu de velhice!");
         }
     }

     void setClean(int valor) {
         this.clean = valor;
         if (clean <= 0) {
             this.clean = 0;
             this.vivo = false;
             System.out.println("Seu Tamagotchi morreu de doencas!");
         }
         if (clean > cleanMax) {
             clean = cleanMax;
         }
         if (idade >= idadeMax) {
             this.idade = idadeMax;
             this.vivo = false;
             System.out.println("Seu Tamagotchi morreu de velhice!");
         }
     }
     
     boolean CheckLife() {
         if (!vivo) {
             System.out.println("Seu Tamagotchi esta morto, voce nao pode interagir com ele!");
             return false;
         }
         return true;
     }

     void brincar() {
         if (CheckLife()) {
             setEnergy(energy - 2);
             setHungry(hungry - 1);
             setClean(clean - 3);
             this.idade += 1;
             this.diamonds += 0;
             if (CheckLife()) {
                 System.out.println("Voce brincou com seu Tamagotchi!");
             }
         }
     }

     void comer() {
         if (CheckLife()) {
             setHungry(hungry + 4);
             setEnergy(energy - 1);
             setClean(clean - 2);
             this.idade += 1;
             this.diamonds += 0;
             if(CheckLife()) {
                 System.out.println("Voce alimentou seu Tamagotchi!");
             }
         }
     }

     void dormir() {
         if (CheckLife()) {
             if (energy > (energyMax - 5)) {
                 System.out.println("Seu Tamagotchi nao esta com sono!");
             } else for (int i = 1; i < (energyMax - energy) + 1; i++) {
                 if (CheckLife()) {
                    setEnergy(energy + 1);
                    this.idade += 1;
                    if (CheckLife()) {
                        System.out.println("Seu Tamagotchi dormiu por " + i + " horas!");
                    } else {
                        return;
                    }
                 } else {
                     return;
                 }
             }
         }
     } 

     void limpar() {
         if (CheckLife()) {
             setClean(clean = cleanMax);
             setEnergy(energy - 3);
             setHungry(hungry - 1);
             this.idade += 2;
             this.diamonds += 0;
             if (CheckLife()) {
                 System.out.println("Voce deu banho no seu Tamagotchi!");
             }
        }
    }

     public String toString() {
        return "ENERGIA: " + energy + "|" + energyMax + " SACIEDADE: " + hungry + "|" + hungryMax + " LIMPEZA: " + clean + "|" + cleanMax +  " DIAMANTES: " + diamonds  + " IDADE: " + idade + "|" + idadeMax;
     }
}

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Bixinho b1 = new Tamagotchi().new Bixinho(0, 0, 0, 0);
        
        while(true) {
            String line = scanner.nextLine();
            String[] ui = line.split(" ");
            
            if(ui[0].equals("$stop")) {
                break;
            } else if (ui[0].equals("$init")) {
                b1 = new Tamagotchi().new Bixinho(Integer.parseInt(ui[1]),Integer.parseInt(ui[2]),Integer.parseInt(ui[3]),Integer.parseInt(ui[4]));
            } else if (ui[0].equals("$show")) {
                System.out.println(b1);
            } else if (ui[0].equals("$play")) {
                b1.brincar();
            }else if (ui[0].equals("$eat")) {
                b1.comer();
            }else if (ui[0].equals("$sleep")) {
                b1.dormir();
            } else if (ui[0].equals("$clean")) {
                b1.limpar();
            } else {
                System.out.println("Comando invalido!");
            }
        }
    }   
}