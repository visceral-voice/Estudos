package controle;

import java.util.Scanner;

public class DiasDaSemana {
	
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Digite o dia da semana! ");
		String diaSemana = entrada.next();
		
		if (diaSemana.equalsIgnoreCase("Domingo")) {
			System.out.println("1� dia da semana");
		} else if (diaSemana.equalsIgnoreCase("Segunda")) {
			System.out.println("2� dia da semana"); 
		} else if (diaSemana.equalsIgnoreCase("Ter�a")) {
			System.out.println("3� dia da semana"); 
		} else if (diaSemana.equalsIgnoreCase("Quarta")) {
			System.out.println("4� dia da semana"); 
		} else if (diaSemana.equalsIgnoreCase("Quinta")) {
			System.out.println("5� dia da semana"); 
		} else if (diaSemana.equalsIgnoreCase("Sexta")) {
			System.out.println("6� dia da semana"); 
		} else if (diaSemana.equalsIgnoreCase("S�bado")) {
			System.out.println("7� dia da semana"); 
		} else {
			System.out.println("Dia inv�lido");
		}
		
		entrada.close();
	}

}
