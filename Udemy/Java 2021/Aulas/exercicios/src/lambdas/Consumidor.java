package lambdas;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class Consumidor {
	
	public static void main(String[] args) {
		
		Consumer<Produto> imprimirNome = prod -> System.out.println(prod.nome + "!!!");
		
		Produto p1 = new Produto("Caneta", 12.74, 0.09);
		
		imprimirNome.accept(p1);
		
		Produto p2 = new Produto("Notebook", 2872.99, 0.25);
		Produto p3 = new Produto("Caderno", 19.90, 0.05);
		Produto p4 = new Produto("Borracha", 7.38, 0.04);
		Produto p5 = new Produto("lápis", 6.25, 0.02);
		
		List<Produto> produtos = Arrays.asList(p1, p2, p3, p4, p5);
		produtos.forEach(imprimirNome);
		produtos.forEach(p -> System.out.printf("Preco = R$ %.2f \n", p.preco));
		produtos.forEach(System.out::println);
	}

}
