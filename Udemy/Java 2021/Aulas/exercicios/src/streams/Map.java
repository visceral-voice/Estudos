package streams;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.UnaryOperator;

public class Map {
	
	public static void main(String[] args) {
		
		Consumer<String> print = System.out::print;
		
		List<String> marcas = Arrays.asList("Bmw ", "Audi ", "Honda ");
		marcas.stream().forEach(print);
		marcas.stream().map(s -> s.toUpperCase()).forEach(print);
		
		//UnaryOperator<String> maisculo = s -> s.toUpperCase();
		UnaryOperator<String> primeiraLetra = s -> s.charAt(0) + "";
		//UnaryOperator<String> grito = s -> s + "!!! ";
		
		System.out.println("\n\nUsando composição no Stream");
		marcas.stream()
			  .map(Utilitarios.maisculo)
			  .map(primeiraLetra)
			  .map(Utilitarios::grito)
			  .forEach(print);
	}

}
