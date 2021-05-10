package oo.heranca.teste;

import oo.heranca.Direcao;
import oo.heranca.Heroi;
import oo.heranca.Monstro;

public class Jogo {
	
	public static void main(String[] args) {
		Heroi h1 = new Heroi(10, 10);
		
		Monstro m1 = new Monstro(10, 11);
		
		System.out.println("Heroi => " + h1.vida);
		System.out.println("Monstro => " + m1.vida);
		
		h1.atacar(m1);
		m1.atacar(h1);

		h1.atacar(m1);
		m1.atacar(h1);

		m1.andar(Direcao.NORTE);
		h1.atacar(m1);
		m1.atacar(h1);

		
		System.out.println("Heroi => " + h1.vida);
		System.out.println("Monstro => " + m1.vida);		
	}

}
