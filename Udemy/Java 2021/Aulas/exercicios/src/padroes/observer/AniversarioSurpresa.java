package padroes.observer;

public class AniversarioSurpresa {
	
	public static void main(String[] args) {
		
		Namorada namorada = new Namorada();
		
		Porteiro porteiro = new Porteiro();
		porteiro.registrarObservador(namorada);
		
		porteiro.registrarObservador(o -> {
			System.out.println("Surpresa por Lambda!");
			System.out.println("Ocorreu em..." + o.getMomento());
		});
		
		porteiro.monitorar();
	}

}
