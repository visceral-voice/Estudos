package streams;

public class MediaTeste {
	
	public static void main(String[] args) {
		
		Media media1 = new Media().adicionar(8.3).adicionar(6.7);
		Media media2 = new Media().adicionar(6.8).adicionar(7.7);
		
		System.out.println(media1.getValor());
		System.out.println(media2.getValor());
		
		System.out.println(Media.combinar(media1, media2).getValor());
	}

}
