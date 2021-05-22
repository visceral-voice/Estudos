package teste.heranca;

import Dto.Dao;
import modelo.heranca.Aluno;
import modelo.heranca.AlunoBolsista;

public class NovoAluno {
	
	public static void main(String[] args) {
		
		Dao<Aluno> dao = new Dao<>();
		
		Aluno aluno1 = new Aluno(123L, "João");
		AlunoBolsista aluno2 = new AlunoBolsista(345L, "Maria", 1000.0);
		
		dao.incluirAtomico(aluno1);
		dao.incluirAtomico(aluno2);
		
		dao.fechar();
	}

}
