package generics;

public class CaixaNumeroTeste {
	
	public static void main(String[] args) {
		
		CaixaNumero<Double> coisaA = new CaixaNumero<>();
		coisaA.guardar(3.12);
		System.out.println(coisaA.abrir());
		
		CaixaNumero<Integer> coisaB = new CaixaNumero<>();
		coisaB.guardar(123);
		System.out.println(coisaB.abrir());
	}

}
