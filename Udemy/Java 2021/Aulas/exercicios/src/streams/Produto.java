package streams;

public class Produto {

	final String nome;
	final double preco;
	final double desconto;
	final boolean temFrete;
	
	public Produto(String nome, double preco, double desconto, boolean temFrete) {
		this.nome = nome;
		this.preco = preco;
		this.desconto = desconto;
		this.temFrete = temFrete;
	}
	
}
