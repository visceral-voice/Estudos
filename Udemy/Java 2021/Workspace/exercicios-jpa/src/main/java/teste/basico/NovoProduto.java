package teste.basico;

import Dto.Dao;
import modelo.basico.Produto;

public class NovoProduto {
	
	public static void main(String[] args) {
		
		Dao<Produto> dao = new Dao<>(Produto.class);
		
		Produto p1 = new Produto("Caneta", 7.45);
		dao.abrirTransacao().incluir(p1).fecharTransacao();
		
		Produto p2 = new Produto("Notebook", 2897.79);
		dao.abrirTransacao();
		dao.incluir(p2);
		dao.fecharTransacao();
		
		Produto p3 = new Produto("Monitor 23", 778.98);
		dao.incluirAtomico(p3);
		
		dao.fechar();
	}

}
