package fundamentos;

import java.util.Scanner;

public class DesafioConversao {
	
	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		System.out.print("Digite primeiro sal�rio: ");
		double primeiroSalario = Double.parseDouble(entrada.next().replace(",", "."));	
		
		System.out.print("Digite segundo sal�rio: ");
		double segundoSalario = Double.parseDouble(entrada.next().replace(",", "."));	

		System.out.print("Digite terceiro sal�rio: ");
		double terceiroSalario = Double.parseDouble(entrada.next().replace(",", "."));
		
		double media = (primeiroSalario + segundoSalario + terceiroSalario) / 3;

		System.out.printf("A m�dia dos sal�rios digitados � R$%.2f.", media);
		
		entrada.close();
	}

}
