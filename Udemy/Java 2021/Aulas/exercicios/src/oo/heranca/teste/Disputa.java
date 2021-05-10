package oo.heranca.teste;

import oo.heranca.desafio.Civic;
import oo.heranca.desafio.Ferrari;

public class Disputa {
	
	public static void main(String[] args) {
		
		Ferrari ferrari = new Ferrari(300);
		Civic civic = new Civic(200);
		
		System.out.println(ferrari);
		System.out.println(civic);

		ferrari.ligarTurbo();
		ferrari.acelerar();
		civic.acelerar();
		
		System.out.println(ferrari);
		System.out.println(civic);
		
		System.out.println(ferrari.velocidadeDoAr());
		
		ferrari.ligarAr();
		ferrari.acelerar();
		
		System.out.println(ferrari);
		
		ferrari.frear();
		civic.frear();

		System.out.println(ferrari);
		System.out.println(civic);
	}

}
