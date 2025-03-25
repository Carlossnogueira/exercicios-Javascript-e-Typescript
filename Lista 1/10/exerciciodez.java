/*
  Escrever  um  programa  que  leia  dois  números  inteiros  e  mostre  todos  os  relacionamentos  de  ordem  existentes entre eles. Os relacionamentos possíveis são: Igual, Não igual, Maior, Menor, Maior ou igual, Menor ou igual. 
 */

import java.util.Scanner;

public class exerciciodez {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite um valor inteiro");
        int primeiroNumero = sc.nextInt();
        System.out.println("Digite o segundo valor");
        int segundoNumero = sc.nextInt();

        System.out.println(primeiroNumero == segundoNumero ? "Os números são iguais" : "Os números são diferentes");
        System.out.println(primeiroNumero != segundoNumero ? "Os números são diferentes" : "Os números são iguais");
        System.out.println(primeiroNumero > segundoNumero ? "O primeiro número é maior" : "O primeiro número não é maior");
        System.out.println(primeiroNumero < segundoNumero ? "O primeiro número é menor" : "O primeiro número não é menor");
        System.out.println(primeiroNumero >= segundoNumero ? "O primeiro número é maior ou igual" : "O primeiro número não é maior ou igual");
        System.out.println(primeiroNumero <= segundoNumero ? "O primeiro número é menor ou igual" : "O primeiro número não é menor ou igual");
        

        sc.close();
    }
}
