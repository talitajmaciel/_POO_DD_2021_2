// JavaScript
// Vou Declarar uma Lista "l", que vai ser expressa quando colocamos os Cochetes []
// Uma Lista que terá 1,2,3
let l = [1,2,3];
console.log(l);

// TypeScript - TIPAGEM
// Declara a LISTA >> (:) >> TIPO >> [] >> = >> valores da lista
let l1:number[] = [2,3,4];
// Disse aqui que essa é uma Variável Lista do Tipo Number
// Para ACESSAR as POSIÇÕES de cada Elemento da Lista (igual em js): l[posição]
// l1[0] = "Talita";
// Aqui temos a demonstração de alguns erros, pois uma String não deve ser atribuída a um Number
console.log(l1);

// Lista de Strings
let l2:string[] = ["Talita", "Maria", "João"];
console.log(l2);

// Como fazer Iterações sob uma Lista?
// Iteração - JavaScript
// length = Tamanho da Lista
// vai da Posição 0 até o Tamanho da minha Lista
console.log(l1.length);
  // Para sabermos o tamanho dessa Lista
for(let i = 0; i<l1.length; i++){
    console.log(i, l1[i]);
    // l1 na Posição i, onde o i começa em 0 e vai até o tamanho dessa Lista
    // O nosso i começa em na Posição 0 e vai até 2
}

// 2º modo de fazer o For
// FOR..IN
for(let i in l1){
     // mostrar i e posições de l1 no índice no Terminal
    console.log(i, l[i]);
    // esse For vai rodar 1x para cada Posição de l1
    // ou seja, o mesmo número de Iterações do meu For passado
    // sendo que a cada Posição o i vai assumir as Posições de l1, o Índice nesse caso
    // Índices de l1: 0, 1, 2 (não são os valores) 
    // repete 3x: 1ª linha 1, 2ª linha 2, 3ª linha 3
    // então o i está se comportando exatamente igual ao i do For Anterior, é só uma de fazer eles mais curto

}

// 3º tipo de For
// FOR..OF
// vai ser usado pra quando precisamos somente dos valores de l1, não precisando dos Índices
// não usaremos o i, pois geralmente usamos para Contador/Índice
for(let elemento of l1){
    console.log(elemento);
    // o número de repetições dele é igual ao tamanho da lista, tem uma repetição pra cada elemento de l1
    // sendo que esse Elemento assume o Valor, a variação do valor do 1º elemento dessa lista "2"
    // na 2ª repetição o elemento assume o valor "3"
    // e na 4ª repetição ele assume o valor "4"
}

// Tipagem dos FORS
// Já vimos que podemos Tipar o Contador "i"
for(let i:number = 0; i<l1.length; i++){
    console.log(i, l1[i]);
}

// O problema é que ele não me deixar Tipar o FOR..IN, nem o FOR..OF
// No futuro talvez, mas agora não, dará erro
//for(let i:number in l1){
//    console.log(i, l[i]);
//}

//for(let elemento:number of l1){
//    console.log(elemento);
//}

// Operações sobre Listas
// let >> nome da lista >> tipagem[] >> = >> valores dos elementos de cada índice
let lista:number[] = [10,20,30,40];
// Inserir Elementos: .push
lista.push(50)
// Coloca o Elemento que se quer Inserir e dar Console pra Rodar no TGerminal
console.log(lista);

// Remover Elementos: .splice
// Dar para Deletar Vários Elementos de uma vez
// Você tem que dar 2 Parâmetros pra ele: start e o deleteCount
// E você tem que dizer A partir de onde deseja Deletar e quantos Depois você quer Deletar
lista.splice(2,3);
// A PARTIR do 2, quero DELETAR 3 ELEMENTOS
// POSIÇÂO INICIAL, QUANTIDADE DE ELEMENTOS
console.log(lista);
// Deletei o 30, 40 e o 50
// Quero deletar só o 30 => lista.splice(2,1)