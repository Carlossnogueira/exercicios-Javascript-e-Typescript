
/*
Faça um programa para calcular o estoque médio de uma peça, sendo que: 
ESTOQUE MÉDIO = (QUANTIDADE_MÍNIMA + QUANTIDADE_MÁXIMA) / 2. 
*/
const prompt = require("prompt-sync")();

let quantidadeMin: number = 10;
let quantidadeMax: number = 50;

let quantidadeMedia: number = (quantidadeMin + quantidadeMax) / 2;
console.log(`O estoque médio é de: ${quantidadeMedia}`);
