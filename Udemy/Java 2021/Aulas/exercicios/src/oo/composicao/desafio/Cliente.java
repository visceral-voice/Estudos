package oo.composicao.desafio;

import java.util.ArrayList;
import java.util.List;

public class Cliente {
	
	final String nome;
	final List<Compra> compras = new ArrayList<>();
	
	Cliente (String nome){
		this.nome = nome;
	}
	
	double obterValorTotalCliente() {
		double totalCliente = 0;
		for (Compra compra : this.compras) {
			totalCliente += compra.obterValorTotalCompra();
		}
		return totalCliente;
	}
}
