package generics;

import java.util.Arrays;
import java.util.List;

public class ListaUtilTeste {

	public static void main(String[] args) {
		
		List<String> langs = Arrays.asList("JS", "PHP", "JAVA", "C**");
		List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);
		
		String linguagem = (String) ListaUtil.getUltimo1(langs);
		System.out.println(linguagem);
		
		Integer numero = (Integer) ListaUtil.getUltimo1(nums);
		System.out.println(numero);
		
		System.out.println(ListaUtil.getUltimo2(langs));
		System.out.println(ListaUtil.getUltimo2(nums));
	}
}
