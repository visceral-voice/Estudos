package streams;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class DesafioMap {
	
	public static void main(String[] args) {
		
		Consumer<Integer> println = System.out::println;
		
		List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);
		
		/*
		 *1. Converter para string binária... 6 => "110"
		 *2. Inverter a string "110" => "011"
		 *3. Converter de volta para inteiro "011" => 3
		 */
		
		nums.stream()
			.map(Utilitarios.toBinario)
			.map(Utilitarios.reverteString)
			.map(Utilitarios.toInteiro)
			.forEach(println);
		
	}

}
