
/*
Efetuar o cálculo da quantidade  de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 
12  Km  por  litro.  Para  obter  o  cálculo,  o  usuário  deve  fornecer  o  tempo  gasto  na  viagem  e  a  velocidade  média. 
Desta  forma,  será  possível  obter  a  distância  percorrida  com  a  fórmula  DISTANCIA  =  TEMPO  *  VELOCIDADE. 
Tendo  o  valor  da  distância,  basta  calcular  a  quantidade  de  litros  de  combustível  utilizada  na  viagem  com  a 
fórmula:  LITROS_USADOS  =  DISTANCIA  /  12.  O  programa  deve  apresentar  os  valores  da  velocidade  média, 
tempo gasto, a distância percorrida e a quantidade de litros utilizada na viagem. Dica: trabalhe com valores reais.
*/ 

let tempoGasto : number = 2; // em horas
let velocidadeMedia : number = 90.0;
let autonomia : number = 12;


let distancia : number = velocidadeMedia * tempoGasto;

let litrosUsados : number = distancia / autonomia;

console.log(`Velocidade média ${velocidadeMedia} Km/h`);
console.log(`Tempo gasto: ${tempoGasto} horas`);
console.log(`Distância percorrida: ${distancia} Km`);
console.log(`Litros usados: ${litrosUsados} litros`);