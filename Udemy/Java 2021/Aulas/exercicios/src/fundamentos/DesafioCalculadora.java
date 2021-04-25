package fundamentos;

import java.util.Scanner;

public class DesafioCalculadora {
	
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Informe o número: ");
		double num1 = entrada.nextDouble();
		System.out.print("Informe o número: ");
		double num2 = entrada.nextDouble();
		System.out.print("Informe a operação: ");
		String operacao = entrada.next();
		
		double resultado = operacao.equals("+") ? num1 + num2 : 
						   operacao.equals("-") ? num1 - num2 :
						   operacao.equals("*") ? num1 * num2 :
						   operacao.equals("/") ? num1 / num2 :
						   operacao.equals("%") ? num1 % num2 :
						   0.0;
		
		System.out.printf("%.2f %s %.2f = %f",num1, operacao, num2, resultado);
		
		entrada.close();
	}

}
