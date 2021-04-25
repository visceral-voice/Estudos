package fundamentos;

import java.util.Scanner;

public class TipoStringEquals {
	
	public static void main(String[] args) {
		System.out.println("2" == "2");
		
		String s1 = new String("2");
		System.out.println("2" == s1);
		System.out.println("2".equals(s1));
		
		Scanner entrada = new Scanner(System.in);
		
		String s2 = entrada.next(); //Tira espaços em branco digitados
		System.out.println("2" == s2.trim());
		System.out.println("2".equals(s2.trim()));
		
		String s3 = entrada.nextLine(); //Pega todo o conteudo digitado inclusive espaços em branco
		System.out.println("2" == s3.trim());
		System.out.println("2".equals(s3.trim()));
		
		entrada.close();
	}

}
