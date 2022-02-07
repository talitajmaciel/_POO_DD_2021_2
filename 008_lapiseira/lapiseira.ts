class Grafite {
    calibre: number;
    dureza: string;
    tamanho: number;
  
    constructor(calibre: number, dureza: string, tamanho: number) {
      this.calibre = calibre;
      this.dureza = dureza;
      this.tamanho = tamanho;
    }
  
    gastoPorFolha(): number {
      if (this.dureza === 'HB')
          return 1;
      if (this.dureza === '2B')
          return 2;
      if (this.dureza === '4B')
          return 4;
      if (this.dureza === '6B')
          return 6;
      return 0;
    }
  
    toString(): string {
      return `Grafite: ${this.calibre}:${this.dureza}:${this.tamanho}`;
    }
  }
  
  class Lapiseira {
    calibre: number;
    private grafites: Grafite[] | null;
  
    constructor(calibre: number) {
      this.calibre = calibre;
      this.grafites = null;
    }
  
    setGrafite(grafite: Grafite): boolean {
      if (grafite.calibre != this.calibre) {
        console.log("O grafite nao eh compativel com a lapiseira");
        return false;
      }
  
      if (this.grafites == null) {
        this.grafites = [];
     this.grafites.push(grafite);
        return true;
      }
  
      this.grafites.push(grafite);
      return true;
    }
  
    removerGrafite(): Grafite | null {
      if (this.grafites == null) {
        console.log("A lapiseira nao possui um grafite");
        return null;
      }
  
      return this.grafites.shift() || null;
    }
  
    puxarNovaPonta() {
      this.removerGrafite();
  
      if (this.grafites == null)
        return;
  
      if (this.grafites.length == 0) {
        this.grafites = null;
        return;
      }
    }
  
    escrever(folhas: number): boolean {
      if (this.grafites == null || this.grafites.length == 0) {
        console.log("A lapiseira nao possui um grafite");
        return false;
      }
      
      const grafiteAtual = this.grafites[0];
      const gasto = grafiteAtual.gastoPorFolha() * folhas;
      
      if (gasto <= grafiteAtual.tamanho) {
        console.log("Escrita concluida");
        grafiteAtual.tamanho -= gasto;
      } else {
        const realizado = grafiteAtual.tamanho / grafiteAtual.gastoPorFolha()
        console.log("Escrita parcial: " + realizado + " folhas");
        grafiteAtual.tamanho = 0;
      }
  
      if (grafiteAtual.tamanho == 0)
        this.puxarNovaPonta();
        
      return true;
    }
  }
  
  const pentel = new Lapiseira(0.5);
  
  console.log(pentel.setGrafite(new Grafite(0.5, "HB", 40)));
  console.log(pentel);
  pentel.escrever(10);
  console.log(pentel);
  pentel.escrever(40);
  console.log(pentel);