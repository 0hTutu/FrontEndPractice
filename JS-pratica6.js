/*
exercicio: criar sistema simples pra organizar uma empresa de pesca ficticia
requisitos: Separar os diferentes tipos de peixe por preco, nome e quantidade total
*/

let peixes = [];

function infoPeixes(nome, preco, quantidade){
    peixes.push({
        nome: nome,
        preco: preco,
        quantidade: quantidade
    }); 
}

function exibirPeixes() {
  console.log("Nome do peixe | Preco | Quantidade");
  console.log("----------------------------------");
    peixes.forEach(function(peixe) {
    
    });
