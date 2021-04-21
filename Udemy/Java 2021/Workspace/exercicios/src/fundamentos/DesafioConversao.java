package fundamentos;

import java.util.Scanner;

public class DesafioConversao {
	
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Digite primeiro salário: ");
		double primeiroSalario = Double.parseDouble(entrada.next().replace(",", "."));	
		
		System.out.print("Digite segundo salário: ");
		double segundoSalario = Double.parseDouble(entrada.next().replace(",", "."));	

		System.out.print("Digite terceiro salário: ");
		double terceiroSalario = Double.parseDouble(entrada.next().replace(",", "."));
		
		double media = (primeiroSalario + segundoSalario + terceiroSalario) / 3;

		System.out.printf("A média dos salários digitados é R$%.2f.", media);
		
		entrada.close();
	}

}
