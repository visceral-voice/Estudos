package streams;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

public class DesafioFilter {
	
	public static void main(String[] args) {
		
		Carro c1 = new Carro("Ford", 220.0, true);
		Carro c2 = new Carro("Fiat", 250.0, true);
		Carro c3 = new Carro("Ferrari", 180.0, false);
		Carro c4 = new Carro("Mercedez", 300.0, true);
		Carro c5 = new Carro("Kia", 170.0, false);
		Carro c6 = new Carro("Toyota", 280.0, true);
		Carro c7 = new Carro("Chevrolet", 180.0, true);
		Carro c8 = new Carro("Honda", 180.0, false);
		
		List<Carro> carros = Arrays.asList(c1, c2, c3, c4, c5,c6, c7, c8);
		
		Function<Carro, String> correETemAr = carro -> "Os carros da " + carro.fabrica + " gozam de conforto e uma incrível velocidade!"; 
		
		carros.stream()
			.filter(carro -> carro.temAr == true)
			.filter(carro -> carro.velocidadeMaxima >= 200.0)
			.map(correETemAr)
			.forEach(System.out::println);
		
	}

}
