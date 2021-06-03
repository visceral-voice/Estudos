package br.com.srpp.exerciciossb.controllers;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.srpp.exerciciossb.model.entities.Produto;
import br.com.srpp.exerciciossb.model.repositories.ProdutoRepository;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository produtoRepository;

	//@PostMapping
	@RequestMapping(method = {RequestMethod.POST, RequestMethod.PUT})
	public @ResponseBody Produto salvarProduto (@Valid Produto produto) {
		produtoRepository.save(produto);
		return produto;
	}
	
	@GetMapping
	public Iterable<Produto> obterProdutos () {
		return produtoRepository.findAll();
	}
	
	@GetMapping("/nome/{parteNome}")
	public Iterable<Produto> obterProdutosPorNome (@PathVariable String parteNome) {
		//return produtoRepository.findByNomeContainingIgnoreCase(parteNome);
		return produtoRepository.searchByNomeLike(parteNome);
	}

	@GetMapping("/{numeroPagina}/{qtdeporPagina}")
	public Iterable<Produto> obterProdutosPorPagina (@PathVariable int numeroPagina, @PathVariable int qtdeporPagina) {
		Pageable page = PageRequest.of(numeroPagina, qtdeporPagina);
		return produtoRepository.findAll(page);
	}
	
	//@GetMapping(path = "/{id}")
	@GetMapping("/{id}")
	public Optional<Produto> obterProdutoPorId (@PathVariable int id) {
		return produtoRepository.findById(id);
	}
	
	/*
	 * @PutMapping public Produto alterarProduto (@Valid Produto produto) {
	 * produtoRepository.save(produto); 
	 * return produto; }
	 */
	
	//@DeleteMapping(path = "/{id}")
	@DeleteMapping("/{id}")
	public void excluirProdutoPorId (@PathVariable int id) {
		produtoRepository.deleteById(id);
	}

}
