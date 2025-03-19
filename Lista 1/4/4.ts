
/*
Ler  quatro  valores  numéricos  inteiros  e  apresentar  o  resultado  dois  a  dois  da  adição  e  multiplicação  entre  os 
valores lidos, baseando-se na utilização do conceito de propriedade distributiva. Dica: se forem lidas as variáveis 
A, B, C e D, devem ser somados e multiplicados os valores de A com B, A com C e A com D; depois B com C, B 
com  D  e  por  último  C  com  D.  Note  que  para  cada  operação  serão  utilizadas  seis  combinações.  Assim  sendo, 
devem ser realizadas doze operações de processamento, sendo seis para as adições e seis para as 
multiplicações.
*/

let valores: number[] = [4,5,6,7];

function calcularOperacoes(valores: number[]): void {

    for (let i = 0; i < valores.length - 1; i++) {
        for (let j = i + 1; j < valores.length; j++) {
            console.log(`Valor ${i + 1} e Valor ${j + 1}:`);
            console.log(`\t${valores[i]} + ${valores[j]} = ${valores[i] + valores[j]}`);
            console.log(`\t${valores[i]} * ${valores[j]} = ${valores[i] * valores[j]}\n`);
        }
    }
}

calcularOperacoes(valores);