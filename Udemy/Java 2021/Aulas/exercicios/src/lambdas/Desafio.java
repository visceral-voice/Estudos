package lambdas;

import java.text.DecimalFormat;
import java.util.function.Function;
import java.util.function.UnaryOperator;

public class Desafio {
	
	public static void main(String[] args) {
		
		Produto p = new Produto("Ipad", 3235.89, 0.13);
		
		/* 1 - A partir do produto calcular o preco real com desconto
		 * 2 - Imposto Municipal: >= 2500 (8,5%) / < 2500 Isento
		 * 3 - Frete: >= 3000 (100) / < 3000 (50)
		 * 4 - Arrendodar Deixar duas casas decimais
		 * 5 - Formatar: R$1234,56
		 * */
		Function<Produto, Double> precoReal = produto -> produto.preco * (1 - produto.desconto);
		UnaryOperator<Double> imposto = valor -> valor >= 2500.00 ? valor * 1.085 : valor;
		UnaryOperator<Double> frete = valor -> valor >= 3000.00 ? valor + 100.0 : valor + 50.0;
		Function<Double, String> arredondaFormatarValor = valor -> new DecimalFormat("R$#####0.00").format(valor);
		
		String resultado = precoReal.andThen(imposto).andThen(frete).andThen(arredondaFormatarValor).apply(p);
		System.out.println("O preço final é " + resultado);
	}

}
