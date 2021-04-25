package fundamentos;

import java.util.Scanner;

public class QuadradoCubo {
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Informe um número: ");
		double num = entrada.nextDouble();
				
		double quadrado = Math.pow(num, 2);
		double cubo = Math.pow(num, 3);
		
		System.out.printf("O número %.2f elevado ao quadrado é %.2f", num, quadrado);
		System.out.printf("\nO número %.2f elevado ao cubo é %.2f", num, cubo);
		
		entrada.close();
	}
}
