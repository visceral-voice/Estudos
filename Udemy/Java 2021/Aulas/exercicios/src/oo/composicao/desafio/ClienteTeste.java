package oo.composicao.desafio;

public class ClienteTeste {
	
	public static void main(String[] args) {
		
		Cliente cliente1 = new Cliente("Maria Julia Moraes");
		
		Compra compra1 = new Compra(cliente1);
		compra1.adicionarItens("Caneta", 9.67, 100);
		compra1.adicionarItens("Notebook", 1897.88, 2);
		
		Compra compra2 = new Compra(cliente1);
		compra2.adicionarItens("Caderno", 10, 10);
		compra2.adicionarItens("Impressora", 998.90, 1);
		
		double compraTotalCliente = cliente1.obterValorTotalCliente();
		System.out.println("O cliente " + cliente1.nome + " já realizou um total de " + compraTotalCliente + " em compras durante este mês");
		System.out.println();
		
		for(int i = 0; i < cliente1.compras.size(); i++) {
			System.out.println("A compra de número " + (i + 1) + " foi de um total de " + cliente1.compras.get(i).obterValorTotalCompra());
			System.out.println("E foram adquiridos os itens abaixo discriminados...:");
			for(Item item: cliente1.compras.get(i).itens) {
				double valorItem = item.quantidade * item.produto.preco;
				System.out.println(item.quantidade + " " + item.produto.nome + " a " + item.produto.preco + " = " + valorItem);
			}
			System.out.println();
		}
	}

}
