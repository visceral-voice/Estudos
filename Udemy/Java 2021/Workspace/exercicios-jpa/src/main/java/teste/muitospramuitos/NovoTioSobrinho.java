package teste.muitospramuitos;

import Dto.Dao;
import modelo.muitospramuitos.Sobrinho;
import modelo.muitospramuitos.Tio;

public class NovoTioSobrinho {
	
	public static void main(String[] args) {
		
		Tio tia1 = new Tio("Ana");
		Tio tio2 = new Tio("Pedro");
		
		Sobrinho sobrinho1 = new Sobrinho("Paulo");
		Sobrinho sobrinha2 = new Sobrinho("Clara");
		
		tia1.getSobrinhos().add(sobrinho1);
		tia1.getSobrinhos().add(sobrinha2);
		sobrinho1.getTios().add(tia1);
		sobrinha2.getTios().add(tia1);
		
		tio2.getSobrinhos().add(sobrinho1);
		tio2.getSobrinhos().add(sobrinha2);
		sobrinho1.getTios().add(tio2);
		sobrinha2.getTios().add(tio2);		
		
		Dao<Object> dao = new Dao<>();
		
		dao.abrirTransacao()
		   .incluir(tia1)
		   .incluir(tio2)
		   .incluir(sobrinho1)
		   .incluir(sobrinha2)
		   .fecharTransacao()
		   .fechar();
		
	}

}
