package controle;

import java.util.Calendar;
import java.util.Date;

public class AnoBissexto {
	
	public static void main(String[] args) {
		
    	Date data = new Date();
    	Calendar cal = Calendar.getInstance();
    	cal.setTime(data);
    	
		int ano = cal.get(Calendar.YEAR);
		
		if(ano % 4 == 0) {
			System.out.printf("O ano %d é bissexto! ", ano);
		} else {
			System.out.printf("O ano %d não é bissexto! ", ano);
		}
		
	}

}
