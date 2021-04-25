package fundamentos;

import java.util.Scanner;

public class CalculoImc {
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Informe o seu peso: ");
		double peso = entrada.nextDouble();
		System.out.print("Informe a sua altura: ");
		double altura = entrada.nextDouble(); 
		
		double imc = peso / (Math.pow(altura, 2));
		
		System.out.printf("O seu imc calculado é de %.2f", imc);
		
		entrada.close();
	}
}
