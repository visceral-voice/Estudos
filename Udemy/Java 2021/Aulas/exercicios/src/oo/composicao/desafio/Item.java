package oo.composicao.desafio;

public class Item {
	
	Compra compra;
	Produto produto;
	double quantidade;

	Item (String nome, double preco, double quantidade) {
		Produto produto = new Produto(nome, preco);
		this.associaProduto(produto, quantidade);
		produto.item = this;
	}
	
	void associaProduto (Produto produto, double quantidade) {
		this.produto = produto;
		this.quantidade = quantidade;
	}
}
