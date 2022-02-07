// Declaração de Variáveis
// var, let, const
// O var não é muito indicado
let x = 10;
x = 30;
console.log(x);

// const não permite mudar o valor da variável, o let sim
const y = 20;
// y = 40;
console.log(y);

// TypeScript -> Tipagem
// Tipagem de Variáveis
// Tipos que posso ter: Number, String, Boolean, Listas: number[], string[], Any
let z:number = 30;
// estou dizendo que  o Z é do Tipo NUMBER
// então não posso faze, por ex. ele em forma de String, pois não atribuir um tipo a outro, porque dará erro
// z = "Talita";
console.log(z);

let s:string = "Talita";
console.log(s);

// Tipo Any: a variável pode ter qualquer tipo, é mesmo que ão colocar nenhum tipo.
// mas se quiser deixar organizado, faz assim
let a:any = 30;
// depois atribuo algo ao "a"
a = "João";
console.log(a);