/*
Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:  
V =  3.14159 * R * R * A 
Onde as variáveis: V, R e A representam respectivamente o volume, o raio e a altura. 
*/ 


let V: number = Math.PI;
let D: number = 50; // diâmetro em centímetros
let R: number = D / 2; // raio em centímetros
let A: number = 150; // altura em centímetros

let result: number = V * R * R * A;
console.log(`O volume da lata de óleo é de ${result.toFixed(2)} cm³`);
