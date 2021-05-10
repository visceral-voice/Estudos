package oo.composicao.desafio;

import java.util.ArrayList;
import java.util.List;

public class Compra {
	
	final Cliente cliente;
	final List<Item> itens = new ArrayList<>();
	
	Compra (Cliente cliente){
		this.cliente = cliente;
		this.cliente.compras.add(this);
	}
	
	double obterValorTotalCompra() {
		double valorTotalCompra = 0;
		for (Item item : this.itens) {
			valorTotalCompra += item.produto.preco * item.quantidade;
		}
		return valorTotalCompra;
	}
	
	void adicionarItens (Item item) {
		this.itens.add(item);
	}
	
	void adicionarItens (String nome, double preco, double quantidade) {
		Item item = new Item(nome, preco, quantidade);
		this.itens.add(item);
		item.compra = this;
	}
}
