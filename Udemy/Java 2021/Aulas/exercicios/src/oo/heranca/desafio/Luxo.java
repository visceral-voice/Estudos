package oo.heranca.desafio;

public interface Luxo {
	
	public abstract void ligarAr();
	public abstract void desligarAr();
	
	default public int velocidadeDoAr() {
		return 1;
	}
}
