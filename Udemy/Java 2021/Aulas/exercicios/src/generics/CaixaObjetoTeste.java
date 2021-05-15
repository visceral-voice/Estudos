package generics;

public class CaixaObjetoTeste {
	
	public static void main(String[] args) {
		CaixaObjeto caixaA = new CaixaObjeto();
		caixaA.guardar(2.3);
		
		Double coisaA = (Double) caixaA.abrir();

		CaixaObjeto caixaB = new CaixaObjeto();
		caixaB.guardar("Olá!");
		
		String coisaB = (String) caixaB.abrir();
		
		System.out.println(coisaA);
		System.out.println(coisaB);

	}

}
