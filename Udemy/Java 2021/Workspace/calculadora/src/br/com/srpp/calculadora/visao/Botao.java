package br.com.srpp.calculadora.visao;

import java.awt.Color;
import java.awt.Font;

import javax.swing.BorderFactory;
import javax.swing.JButton;

@SuppressWarnings("serial")
public class Botao extends JButton {

	public Botao (String texto, Color cor) {
		setText(texto);
		setBackground(cor);
		setFont(new Font("courier", Font.PLAIN, 24));
		setOpaque(true);
		setForeground(Color.WHITE);
		setBorder(BorderFactory.createLineBorder(Color.BLACK));
	}
	
}
