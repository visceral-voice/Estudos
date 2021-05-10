package lambdas;

public class CalculoTeste1 {
	
	public static void main(String[] args) {
		
		Calculo soma = new Somar();
		Calculo multiplica = new Multiplicar();
		
		System.out.println(soma.executar(2, 3));
		System.out.println(multiplica.executar(2, 3));
	}

}
