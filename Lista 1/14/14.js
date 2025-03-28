// Escreva um programa que leia dois números e apresente a diferença do maior para o menor.

let numberone = -5;
let numbertwo = 3;
let temp;

if(numberone > numbertwo){
    temp = numberone - numbertwo;
    console.log(`A diferença do ${numberone} para ${numbertwo} é de = ${temp}`);
}

if(numberone <= numbertwo){
    temp = numbertwo - numberone;
    console.log(`A diferença do ${numberone} para ${numbertwo} é de = ${temp}`);
}


