package streams;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;

public class DesafioFilterII {
	
	public static void main(String[] args) {
		
		Produto p1 = new Produto("Ipad", 2250.95, 0.2, true);
		Produto p2 = new Produto("Iphone 12", 12100.59, 0.2, false);
		Produto p3 = new Produto("Iphone 11", 8784.50, 0.2, false);
		Produto p4 = new Produto("Iphone Max", 9124.65, 0.25, true);
		Produto p5 = new Produto("Iphone 8", 4350.20, 0.3, false);
		Produto p6 = new Produto("Iphone 7", 2899.95, 0.2, true);
		Produto p7 = new Produto("Macbook Air 13", 12250.95, 0.2, false);
		Produto p8 = new Produto("Macbook Air 17", 18550.95, 0.2, false);
		Produto p9 = new Produto("Macbook Air 22", 27944.60, 0.3, true);
		
		List<Produto> produtos = Arrays.asList(p1, p2, p3, p4, p5, p6, p7, p8, p9);
		
		Predicate<Produto> bomDesconto = produto -> produto.desconto > 0.2;
		Predicate<Produto> freteGratis = produto -> produto.temFrete == false;
		Function<Produto, String> promocaoDia = prod -> "Aproveite somente hoje " + prod.nome  + " de " + prod.preco + " por apenas " + (prod.preco * (1 - prod.desconto)) + " e frete grátis!!!";
		
		produtos.stream()
			.filter(bomDesconto)
			.filter(freteGratis)
			.map(promocaoDia)
			.forEach(System.out::println);
	}

}
