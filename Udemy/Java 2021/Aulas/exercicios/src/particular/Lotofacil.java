package particular;

import java.util.ArrayList;
import java.util.List;
import java.util.TreeSet;

public class Lotofacil {
		
	public static void main(String[] args) {
		
		List<TreeSet<Integer>> apostas = new ArrayList<>();
		int numSorteado;
		
		do {
			TreeSet<Integer> nums = new TreeSet<>();
			do {
				numSorteado = (int) ((Math.random() * 25) + 1);
				nums.add(numSorteado);
				
			} while (nums.size() < 15);
			apostas.add(nums);
		} while(apostas.size() < 12);
		
		apostas.forEach(aposta -> {
			aposta.stream().forEach(num -> System.out.print(num + " | "));
			System.out.println("");
		});
		
	}


}
