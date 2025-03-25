/*
  Faça  um  algoritmo  que  leia  a  idade  de  uma  pessoa  expressa  em  anos,  meses  e  dias  e  escreva  a  idade  dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.  
*/

import java.util.Scanner;

class exercicionove {
    public static void main(String[] args) {
        int ano, mes, dia = 0;
        int anoSaida, mesSaida, idadeEmDias = 0;
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite sua idade (anos):");
        ano = sc.nextInt();
        System.out.println("Digite os meses de idade:");
        mes = sc.nextInt();
        System.out.println("Digite os dias:");
        dia = sc.nextInt();

        anoSaida = ano * 365;
        mesSaida = (mes == 1) ? 30 : mes * 30;
        idadeEmDias = anoSaida + mesSaida + dia;

        System.out.println("Você possui " + idadeEmDias + "  dias de vida");

        sc.close();
    }
}