package streams;

import java.util.function.Function;
import java.util.function.UnaryOperator;

public interface Utilitarios {
	
	public static UnaryOperator<String> maisculo = s -> s.toUpperCase();
	public static UnaryOperator<String> primeiraLetra = s -> s.charAt(0) + "";
	public static Function<Integer, String> toBinario = valor -> Integer.toBinaryString(valor);
	public static UnaryOperator<String> reverteString = s -> new StringBuilder(s).reverse().toString();
	public static Function<String, Integer> toInteiro = valor -> Integer.parseInt(valor,2);
	
	public static String grito (String s) {
		return s + "!!! ";
	}

}
