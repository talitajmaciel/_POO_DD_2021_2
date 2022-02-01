// Função em JavaScript
// function >> nome >> parâmetros >> chaves {código da função}
//function adicionar(a,b) {
    // se eu quero adicionar esses números/parâmetros coloco return
    // return a+b;
    // nesse caso se colocarmos pra rodar no terminal não vai dá muito legal -> "deno run .\funcoes.ts" 
    // Porque pedirá a Tipagem
//}

// Funções em TypeScript
// É a mesma coisa, mas temos que anotar os Tipos 
// e os Tipos de Retorno também, depois do parentese fechado, colocamos -> (:)
function adicionar(a:number, b:number):number{
    return a+b;
}
console.log(adicionar(2,3));

// Funções: podem armazenar variáveis, podem ser passadas por parâmetros de funções, podemos colocar listas
// enfim, podemos fazer tudo o que quisermos

// Quero declarar uma variável chamada "adicionar1" e quero atribuir uma Função a ela
// Começo por Function, não atribuirei  nome a ela, pois já coloquei anteriormente (adicionar1)
// que é a variável a qual atribuirei a função
// então essa será o que chamamos de Variável Anônima
let adicionar1 = function (a:number, b:number):number{
    return a+b;
}
// ela vai funcionar como a função normal
// então posso definir o valor dos parâmetros, como fiz na outra
console.log(adicionar1(3,4));

// Outra forma de fazer é com o:
// Arrow function
// É uma Função Anônima, mas não usamos "function", só os parãmetros e a tipagem de cada um
// mas no fim, ao invés das chaves, coloco (=>) pra indicar que é uma função e depois abro as chaves
// Arrow em inglês é Seta
let adicionar2 = (a:number, b:number):number => {
    return a+b;
}
console.log(adicionar2(4,5));

// Essas Sintaxes anteriores são boas quando você precisar colocar várias linhas, com qualquer tipo de comandos e funções dentro
// Esse de agora vai ser um exemplo um pouco mais limitado, quando queremos colocar apenas uma coisa
// Outra forma de fazer Função no TS, que é uma modicação simples desse Arrow Function:
// A diferença vai está depois da Setinha, no lugar das Chaves coloca-se Parenteses e dentro terá o valor a ser retorno nessa Função
let adicionar3 = (a:number, b:number):number => (a+b);
console.log(adicionar3(5,6));


