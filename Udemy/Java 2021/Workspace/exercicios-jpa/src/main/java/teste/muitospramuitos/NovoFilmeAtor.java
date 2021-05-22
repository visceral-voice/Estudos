package teste.muitospramuitos;

import Dto.Dao;
import modelo.muitospramuitos.Ator;
import modelo.muitospramuitos.Filme;

public class NovoFilmeAtor {
	
	public static void main(String[] args) {
		
		Filme filmeA = new Filme("Start Wars", 8.7);
		Filme filmeB = new Filme("O Fugitivo", 8.3);
		
		Ator ator1 = new Ator("Harrison Ford");
		Ator atriz2 = new Ator("Carrie Fisher");
		
		filmeA.adicionarAtor(ator1);
		filmeA.adicionarAtor(atriz2);
		
		filmeB.adicionarAtor(ator1);
		
		Dao<Filme> dao = new Dao<>();
		
		dao.incluirAtomico(filmeA);
	}

}
