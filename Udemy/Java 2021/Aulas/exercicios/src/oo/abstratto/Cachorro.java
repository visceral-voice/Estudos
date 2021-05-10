package oo.abstratto;

public class Cachorro extends Mamifero {

	@Override
	public String mamar() {
		return "Usando leite";
	}
	
	@Override
	public String andar() {
		return "Usando as patas";
	}
}
