package fundamentos;

import java.util.Scanner;

public class EquacaoSegundoGrau {
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.println("ax2 + bx + c = 0");
		
		System.out.print("Informe o valor de a: ");
		double a = entrada.nextDouble();

		System.out.print("Informe o valor de b: ");
		double b = entrada.nextDouble();

		System.out.print("Informe o valor de c: ");
		double c = entrada.nextDouble();
		
		double delta = (Math.pow(b, 2)) - (4 * a * c);
		double x1 = (-b + Math.sqrt(delta)) / (2 * a);
		double x2 = (-b - Math.sqrt(delta)) / (2 * a);
		
		System.out.printf("O valor do Delta calculado é: %.2f e os valores de x são %.2f e %.2f", delta, x1, x2);
		
		entrada.close();
	}
}
