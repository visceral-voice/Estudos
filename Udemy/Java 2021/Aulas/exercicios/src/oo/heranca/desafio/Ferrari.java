package oo.heranca.desafio;

public class Ferrari extends Carro implements Esportivo, Luxo {
	
	public boolean modoTurbo;
	public boolean situacaoAr;
	
	protected Ferrari () {
		this(300);
	}
	
	public Ferrari(int velocidadeMaxima){
		super(velocidadeMaxima);
		super.setDelta(15);
	}
	
	@Override
	public void ligarTurbo() {
		modoTurbo = true;
	}
	
	@Override
	public void desligarTurbo() {
		modoTurbo = false;
	}
	
	@Override
	public void ligarAr() {
		situacaoAr = true;
	}
	
	@Override
	public void desligarAr() {
		situacaoAr = false;
	}
	
	@Override
	public int getDelta() {
		int delta = 0;
		if (modoTurbo && !situacaoAr) {
			delta = 35;
		} else if (modoTurbo && situacaoAr) {
			delta = 30;
		} else if (!modoTurbo && situacaoAr) {
			delta = 10;
		} else {
			delta = 15;
		}
		
		return delta;
	}
}
