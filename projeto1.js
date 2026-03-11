// 1) Lista de produtos (nomes)
const produtos = [
    "Camiseta Básica",
    "Calça Jeans",
    "Tênis Casual",
    "Boné Trucker",
    "Moletom Canguru",
    "Meia Cano Alto",
    "Óculos de Sol",
    "Carteira Couro"
];

// 2) Lista de preços (mesma ordem dos produtos)
const precos = [49.90, 159.90, 229.90, 39.90, 119.90, 19.90, 89.90, 79.90];


// 3) Função para mostrar o estoque
function mostrarEstoque() {
    console.log("\n" + "=".repeat(45));
    console.log("          ESTOQUE DA LOJA");
    console.log("=".repeat(45));

    if (produtos.length === 0) {
        console.log("Estoque vazio no momento.");
    } else {
        produtos.forEach((produto, indice) => {
            const precoFormatado = precos[indice].toFixed(2).padStart(7);
            console.log(`${indice.toString().padStart(2)} | ${produto.padEnd(20)} | R$ ${precoFormatado}`);
        });
    }

    console.log("=".repeat(45));
}


// 4) Função para adicionar um novo produto
function adicionarProduto(nome, preco) {
    produtos.push(nome);
    precos.push(preco);
    console.log(`\nProduto '${nome}' adicionado com sucesso por R$ ${preco.toFixed(2)}`);
}


// 5) Função para remover produto pelo índice
function removerProduto(indice) {
    if (indice < 0 || indice >= produtos.length) {
        console.log(`\nErro: Índice ${indice} inválido!`);
        return;
    }

    const nomeRemovido = produtos.splice(indice, 1)[0];
    const precoRemovido = precos.splice(indice, 1)[0];
    console.log(`\nProduto '${nomeRemovido}' (R$ ${precoRemovido.toFixed(2)}) foi removido do estoque.`);
}


// ------------------------------------------------------
// EXECUÇÃO NA ORDEM SOLICITADA
// ------------------------------------------------------

console.log("ESTADO INICIAL DO ESTOQUE:");
mostrarEstoque();

// Adiciona um produto
adicionarProduto("Jaqueta Impermeável", 299.90);

// Mostra novamente
console.log("\nESTOQUE APÓS ADIÇÃO:");
mostrarEstoque();

// Remove o produto de índice 3 (Boné Trucker)
removerProduto(3);

// Mostra o estoque final
console.log("\nESTOQUE APÓS REMOÇÃO:");
mostrarEstoque();