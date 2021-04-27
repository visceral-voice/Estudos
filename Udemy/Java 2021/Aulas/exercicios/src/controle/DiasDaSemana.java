package controle;

import java.util.Scanner;

public class DiasDaSemana {
	
	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Digite o dia da semana! ");
		String diaSemana = entrada.next();
		
		if (diaSemana.equalsIgnoreCase("Domingo")) {
			System.out.println("1º dia da semana");
		} else if (diaSemana.equalsIgnoreCase("Segunda")) {
			System.out.println("2º dia da semana"); 
		} else if (diaSemana.equalsIgnoreCase("Terça")) {
			System.out.println("3º dia da semana"); 
		} else if (diaSemana.equalsIgnoreCase("Quarta")) {
			System.out.println("4º dia da semana"); 
		} else if (diaSemana.equalsIgnoreCase("Quinta")) {
			System.out.println("5º dia da semana"); 
		} else if (diaSemana.equalsIgnoreCase("Sexta")) {
			System.out.println("6º dia da semana"); 
		} else if (diaSemana.equalsIgnoreCase("Sábado")) {
			System.out.println("7º dia da semana"); 
		} else {
			System.out.println("Dia inválido");
		}
		
		entrada.close();
	}

}
