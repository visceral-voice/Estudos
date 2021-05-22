package teste.consulta;

import Dto.Dao;
import modelo.consulta.NotaFilme;

public class ObterMediaFilmes {

	public static void main(String[] args) {
		
		Dao<NotaFilme> dao = new Dao<>(NotaFilme.class);
		
		NotaFilme nota = dao.consultarUm("obterMediaGeralFilmes");
		
		System.out.println(nota.getMedia());
		
		dao.fechar();
	}
}
