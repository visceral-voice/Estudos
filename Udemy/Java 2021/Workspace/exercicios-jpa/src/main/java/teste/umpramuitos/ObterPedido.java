package teste.umpramuitos;

import Dto.Dao;
import modelo.umpramuitos.ItemPedido;
import modelo.umpramuitos.Pedido;

public class ObterPedido {
	
	public static void main(String[] args) {
		
		Dao<Pedido> dao = new Dao<>(Pedido.class);
		
		Pedido pedido = dao.obterPorId(1L);
		
		for (ItemPedido item: pedido.getItens()) {
			System.out.println(item.getProduto().getNome());
			System.out.println(item.getQuantidade());
		}
		
		dao.fechar();
	}
	
}
