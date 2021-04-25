package fundamentos;

import java.util.Scanner;

public class CelsiusToFarenheit {
	
	public static void main(String[] args) {
		
		final double ACERTO = 32.0;
		final double MULT = 5.0 / 9.0;
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Informe a temperatura em º Celsius: ");
		double celsius = entrada.nextDouble();
		double farenheit = (celsius / MULT) + ACERTO;
		
		System.out.printf("A temperatura em º Farenheit é %.2f", farenheit);
		
		entrada.close();
	}

}
