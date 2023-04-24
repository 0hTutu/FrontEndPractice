/* 
exercicio: criar sistema simples pra organizar uma empresa de pesca ficticia
requisitos: Separar os diferentes tipos de peixe por preco, nome e quantidade total
----------------------------------------------------------------------------------
-Definir um array para armazenar as informacoes sobre os peixes
-Funcao para adicionar informacoes sobre um peixe ao array
-função para adicionar informacoes sobre peixes 
-Funcao para exibir as informacoes sobre os peixes
-Exibir as informacoes sobre os peixes 
*/

let peixes = [];

//a função infopeixes serve pra guardar as informações dos peixes dentro do Array `peixes`
function infoPeixes(nome, preco, quantidade){
    peixes.push({
        nome: nome,
        preco: preco,
        quantidade: quantidade
    }); 
}  

//a função addPeixes serve pra adcionar peixes a tabela
function addPeixes(){
    alert("adcionar novas informações sobre um peixe:");
    
    let nome = prompt("Insira o nome do peixe.");
    let preco = parseFloat(prompt("Insira o preço do peixe. (em R$)"));
    let quantidade = parseInt(prompt("Insira a quantidade de peixes."));

    infoPeixes(nome, preco, quantidade);

    alert("informações adcionadas com sucesso!");
}

//esta função serve para a exibição das informações e dados dos peixos como, nome, preço e quantidade.
function exibPeixes(){
    console.log("nome do peixe | preço | quantidade de peixes")
    console.log("--------------------------------------------")
        peixes.forEach(function(peixe){
            console.log(`${peixe.nome} | ${peixe.preco} R$ | ${peixe.quantidade}`);
        })
}

addPeixes();

exibPeixes();
