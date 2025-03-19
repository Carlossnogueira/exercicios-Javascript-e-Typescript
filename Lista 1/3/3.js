let indend = "589354-0";
let pecaCod = 1;
let precoPeca = 1.5;
let quantVendida = 12;

let resultTotal = precoPeca * quantVendida;
let comissao = resultTotal * 0.05;
console.log(comissao);

console.log("----- Recibo de Comissão -----");
console.log("Vendedor: " + indend);
console.log("Código da peça: " + pecaCod);
console.log("Total da venda: R$ " + resultTotal.toFixed(2));
console.log("Comissão (5%): R$ " + comissao.toFixed(2));
