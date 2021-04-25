package fundamentos;

import java.util.Scanner;

public class FarenheitToCelsius {
	
	public static void main(String[] args) {
		
		final double ACERTO = 32.0;
		final double MULT = 5.0 / 9.0;
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Informe a temperatura em � Farenheit: ");
		double farenheit = entrada.nextDouble();
		double celsius = (farenheit - ACERTO) * MULT; 
		
		System.out.printf("A temperatura em � Celsius � %.2f", celsius);
		
		entrada.close();
	}

}
