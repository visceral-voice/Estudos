package teste.umpramuitos;

import Dto.Dao;
import modelo.basico.Produto;
import modelo.umpramuitos.ItemPedido;
import modelo.umpramuitos.Pedido;

public class NovoPedido {
	
	public static void main(String[] args) {
		
		Dao<Object> dao = new Dao<>();
		
		Produto produto = new Produto("Geladeira", 2789.99);
		Pedido pedido = new Pedido();
		ItemPedido item = new ItemPedido(pedido, produto, 10);
		
		dao.abrirTransacao()
		   .incluir(produto)
		   .incluir(pedido)
		   .incluir(item)
		   .fecharTransacao();
		
		dao.fechar();
	}
}
