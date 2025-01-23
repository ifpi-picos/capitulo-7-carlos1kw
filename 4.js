const produto = {
    nome: "goma fresca",
    preco: "7.00",
    quantidade: "5",
};
const valorTotalQuilos  = produto.preco * produto.quantidade;
console.log("Os 5 Quilos de " + produto.nome + " é R$" + valorTotalQuilos.toFixed(2));