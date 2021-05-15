package generics;

public class CaixaIntTeste {
	
	public static void main(String[] args) {
		
		CaixaInt coisa = new CaixaInt();
		coisa.guardar(123);
		System.out.println(coisa.abrir());
	}

}
