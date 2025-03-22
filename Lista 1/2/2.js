/*
Faça um programa que: 
- Leia a cotação do dólar 
- Leia um valor em dólares 
- Converta esse valor para Real 
- Mostre o resultado
*/

let dolar = 5.16;
let valorEmDolar = 75.82;

let convercao = dolar * valorEmDolar;
console.log(`${valorEmDolar} USD em R$ fica: R$ ${convercao.toFixed(2)}`);  