    // Agora vamos Organizar aqui como se fosse Programação Estruturada

    // Esse "saldo" é um pouvo estranho, porque se imaginarmos, nesse Banco, podemos ter várias Contas
    // Então eu gostaria de identificar o dono dessa Conta, o ID, o nome, algo assim
    // Dessa forma, posso fazer um OBJETO
    // Um Objeto chamado CONTA
         // Agora vamos Implementar em Funções Separadas pela lógica de Depositar e a de Sacar
         // Função Depositar que recebe os Parâmetros Conta, que não vai ter a Tipagem nesse Objeto (Any - pode ser qualquer tipo),mas o Valor a ser depositado vai ter sua Tipagem que é Number
         // Que vai Retornar Void, ou seja, nada
function depositar(conta:any, valor:number):void{
    conta.saldo += valor;
}

        // Agora vou Implementar o SACAR
        // Função Sacar que recebe os Parâmetros Conta com Tipagem Any (qualquer), e Valor com Tipagem Number, para Retornar Boolean (Verdadeiro ou Falso) se essa Operação de Saque foi bem sucedida ou não
function sacar(conta:any, valor:number):boolean{
    // se o Valor for Menor Igual ao que tenho na Conta.Saldo, posso Sacar
    // e Desconto do Valor Atual
    // e Retorno True, dizendo que a Operação foi realizada com sucesso
    if(valor <= conta.saldo){
        conta.saldo -= valor;
        return true;
        // Se não, Retorno False
        // Isso se o Valor for Maior que o Conta.Saldo
    } else {
        // E ainda posso colocar
        console.log("Salque não autorizado: Saldo insuficiente")
        return false;
    }
    
}

        // E se eu quisesse fazer uma Função só para Criar Contas
        // onde vou receber como Parâmetros nome_titular, saldo_inicial
        // que me retornará um Objeto desses
        // que tem o Nome do Titular,
        // então estou criando um Objeto, fazendo uma fébrica de Objetos aqui e vai Retornar Objetos sempre nesse formatinho
        // Pra não ter o perigo de outro programador errar algo e colocar tudo a perder
        // Sem esquecer da Tipagem de cada Parâmetro, e Retornar ANY no final pra não precisar definir a Tipagem desse Objeto inteiro
function criar_conta(nome_titular:any, saldo_inicial:number):any{
    return {
        "nome_titular": nome_titular,
        "saldo": saldo_inicial,

    }
}
// Nesse exemplo vamos fazer uma Conta do Banco
    // let saldo:number = 0;
        // E para CRIAR cada CONTA irei chamar aquela Função
let conta = criar_conta("Talita", 0);
    // "nome_titular": "Talita",
    // "saldo": 0,
    // Então nesse Objeto Conta, terei 2 Atributos
    // 1. "nome_titular" cujo o valor é "Talita"
    // 2. "saldo" cujo iniciará em 0

// Simulando a Conta do Banco, eu teria um Atributo chamado SALDO (do Tipo NUMBER), que vai começar com o valor 0

// Se eu quiser fazer um Depósito, eu posso Inserir 10 nesse Saldo, ficando assim:
    // saldo += 10;
    // E para ACESSAR o Atributo SALDO:
    // conta.saldo += 10; SUBSTITUO por isso aqui:
    depositar(conta, 10);
// Então quando eu for olhar o meu Saldo vai está lá Acrescido de 10 Reais
    // console.log(saldo);
    console.log(conta.saldo);

// Se eu quiser Retirar 5 Reais:
    // saldo -= 5;
    // conta.saldo -= 5;
// E quando eu for olhar vai tá um Saldo de 5 Reais, que é o que Sobrou
    // console.log(saldo); SUBSTITUO por isso aqui:
    sacar(conta, 5);
    console.log(conta.saldo);

// Mas e se alguém viesse e tirasse -15 Reais?
// Meu saldo ficaria Negativo
// Então eu naõ poderia permitir essa Retirada e ficar com -10 em meu Saldo
    // saldo -= 15;
    // conta.saldo -= 15; SUBSTITUO por isso aqui:
    sacar(conta, 15);
    // console.log(saldo);
    console.log(conta.saldo);
    // Vou ficar com um Saldo de -10, tenho que fazer algo para deixar acontecer um Saque de Valor mais Alto que o que tenho na Conta
    // então vou criar IFs na Função de Saque

let conta1 = criar_conta("Maria", 1000);

sacar(conta1, 100);
// Então Maria ficará com 900
console.log(conta1.saldo);

