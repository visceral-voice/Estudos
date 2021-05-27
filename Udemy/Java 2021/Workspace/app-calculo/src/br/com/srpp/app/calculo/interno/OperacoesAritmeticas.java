package br.com.srpp.app.calculo.interno;

import java.util.Arrays;

public class OperacoesAritmeticas {

	public Double soma(Double... nums) {
		return Arrays.stream(nums).reduce(0.0, (t, a) -> t + a);
	}
}
