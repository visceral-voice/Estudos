package generics;

public class CaixaTeste {
	
	public static void main(String[] args) {
		
		Caixa<String> coisaA = new Caixa<>();
		coisaA.guardar("Segredo!");
		System.out.println(coisaA.abrir());
		
		Caixa<Double> coisaB = new Caixa<>();
		coisaB.guardar(3.1415);
		System.out.println(coisaB.abrir());
	}

}
