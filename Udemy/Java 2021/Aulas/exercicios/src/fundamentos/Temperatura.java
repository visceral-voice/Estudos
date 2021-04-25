package fundamentos;

public class Temperatura {
	
	public static void main(String[] args) {
		//(Fº - 32) * (5/9) = Cº
		
		final int ACERTO = 32;
		final double MULT = 5.0/9.0;
		
		double temperaturaFarenheit = 86;
		double temperaturaCelsius = (temperaturaFarenheit - ACERTO) * MULT;
		System.out.println("A temperatura em Celsius é " + temperaturaCelsius);
		
		temperaturaFarenheit = 0;
		temperaturaCelsius = (temperaturaFarenheit - ACERTO) * MULT;
		System.out.println("A temperatura em Celsius é " + temperaturaCelsius);
	}

}
