package classe.desafio;

public class Jantar {

	public static void main(String[] args) {
		
		Comida c1 = new Comida("Arroz", 0.300);
		Comida c2 = new Comida("Feijão", 0.250);
		
		Pessoa p1 = new Pessoa("Leonardo", 79.5);
		double pesoAnterior = p1.peso;
		
		p1.comer(c1);
		p1.comer(c2);
		
		System.out.printf("%s antes do jantar estava com %.2f, ele comeu %s e %s no jantar e está agora com %.2f!", p1.nome, pesoAnterior, c1.nome, c2.nome, p1.peso);
	}
}
