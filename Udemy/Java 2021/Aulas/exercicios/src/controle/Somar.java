package controle;

import java.util.Scanner;

public class Somar {
	
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		int valor = 0;
		int total = 0;
		System.out.println("Digite um valor positivo ou negativo para finalizar!");
		while (valor >= 0) {
			valor = entrada.nextInt();
			if (valor > 0) {
				total += valor;
				System.out.printf("A soma dos números digitados é %d.", total);
			}
		}
		System.out.println("Fim!");
		entrada.close();
	}

}
