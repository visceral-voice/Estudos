package br.com.srpp.campominado.modelo;

@FunctionalInterface
public interface CampoObservador {

	public void eventoOcorreu (Campo campo, CampoEvento evento);
}
