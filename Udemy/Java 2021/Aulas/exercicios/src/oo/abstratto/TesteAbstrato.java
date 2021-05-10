package oo.abstratto;

public class TesteAbstrato {
	
	public static void main(String[] args) {
		Cachorro dog = new Cachorro();
		
		System.out.println(dog.respirar());
		System.out.println(dog.andar());
		System.out.println(dog.mamar());
	}

}
