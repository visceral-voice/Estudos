package teste.basico;

import java.util.List;

import Dto.ProdutoDao;
import modelo.basico.Produto;

public class ObterProdutos {
	
	public static void main(String[] args) {
		
		ProdutoDao dao = new ProdutoDao();
		
		List<Produto> produtos = dao.obterTodos();
		
		for (Produto produto : produtos) {
			System.out.println("ID: " + produto.getId() + " Nome: " + produto.getNome());
		}
		
		double precoTotal = produtos.stream().map(p -> p.getPreco()).reduce(0.0, (t, p) -> t + p).doubleValue();
		System.out.println("O valor total dos produtos é R$ " + precoTotal);
		
		dao.fechar();
	}

}
