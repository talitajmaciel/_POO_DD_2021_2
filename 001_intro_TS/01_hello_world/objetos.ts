// OBJETOS
// Em Python equivale aos Dicts - Dicionários
// Em C equivale muito aos Structs - Registro
// Em Java equivale mais ou menos a objetos taambém

// Objetos - JavaScript (também funcionará no TS)
// Sem a Tipagem nesses exemplos, pois ela é bem chatinha e não iremos usar agora
// Um Objeto é quando você quer descrever algum Tipo de Coisa, Objeto na vida Real, alguma Entidade que tem alguns Atributos
// por exemplo, uma pessoa, ela vai ter => Nomme e Idade
// não tem como descrever uma pessoa só pelo nome ou só pela idade
// Nome é uma String. Então posso declarar uma Variável chamada String
// e também posso declarar uma Variável chamada Idade, mas não ficam uma atrelada a outra
// Então o Objeto é onde posso colocar todas as informações de uma determinada Entidade, de uma determinada coisa ou seja lá o que for
// consigo colocar em lugar só

// Vou Declarar um Objeto com o nome Pessoa
// Essa Pessoa/Objeto terá 2 Atríbutos/Chaves/Cammpos
// Que serão o Nome e a Idade
// Para declarar um Objeto:
// let >> Nome do Objeto >> = >> { >> Atributos (Nome do Atributo (:) Valor desse Atributo) >> , >> Próximo Atributo >> , >> }
// Assim Declaro um Objeto e guardo ele na Variável Pessoa
let pessoa = {
    "nome": "Talita",
// Essa pessoa tem um Atributo chamado nome, cujo Valor é Talita
    "idade": "19",
// Novo Atributo chamado Idade, cujo Valor é 19
}
console.log(pessoa);

// Como ACESSAR cada Atributo:
console.log(pessoa.nome);
// Estou Acessando o Atributo NOME do Objeto, cujo a Variável PESSOA está referenciando
console.log(pessoa.idade);
// Da mesma forma Acesso apenas a IDADE

// Adicionar mais Campos
 // pessoa.sobrenome = "Maciel";
// No JS funciona assim, no TS dá erro