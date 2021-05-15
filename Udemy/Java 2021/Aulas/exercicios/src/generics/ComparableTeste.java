package generics;

import java.util.TreeSet;

public class ComparableTeste {
	
	public static void main(String[] args) {
		
		TreeSet<Integer> nums = new TreeSet<>();
		
		nums.add(10);
		nums.add(15);
		nums.add(42);
		nums.add(16);
		nums.add(23);
		nums.add(34);
		nums.add(125);
		nums.add(10);
		nums.add(-5);
		nums.add(54);
		
		nums.stream().forEach(System.out::println);
	}

}
