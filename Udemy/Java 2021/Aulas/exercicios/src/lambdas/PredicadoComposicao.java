package lambdas;

import java.util.function.Predicate;

public class PredicadoComposicao {
	
	public static void main(String[] args) {
		
		Predicate<Integer> isPar = numero -> numero % 2 == 0;
		Predicate<Integer> temTresDigitos = numero -> numero >= 100 && numero <= 999;
		
		System.out.println(isPar.and(temTresDigitos).negate().test(133));
		System.out.println(isPar.and(temTresDigitos).test(132));
		System.out.println(isPar.or(temTresDigitos).test(133));
	}

}
