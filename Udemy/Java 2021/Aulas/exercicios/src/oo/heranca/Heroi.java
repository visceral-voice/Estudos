package oo.heranca;

public class Heroi extends Jogador {
	
	public Heroi(int x, int y){
		super(x, y);
	}

	public boolean atacar (Jogador oponente) {
		boolean atack1 = super.atacar(oponente);
		boolean atack2 = super.atacar(oponente);
		boolean atack3 = super.atacar(oponente);
		
		return atack1 || atack2 || atack3;
	}
	
}
