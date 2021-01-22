using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Frontend.Models
{
    public class ProdutoPaginacao
    {
        public string Id { get; set; }
        public string Nome { get; set; }
        public string Categoria_Id { get; set; }
        public string Categoria_Nome { get; set; }
        public decimal Preco { get; set; }
        public IEnumerable<ProdutoViewModel> Produtos { get; set; }
        public int ProPorPagina { get; set; }
        public int PaginaAtual { get; set; }

        public int Contador()
        {
            return Convert.ToInt32(Math.Ceiling(Produtos.Count() / (double)ProPorPagina));
        }

        public IEnumerable<ProdutoViewModel> ProdutoPaginado()
        {
            int inicio = (PaginaAtual - 1) * ProPorPagina;
            return Produtos.OrderBy(p => p.Id).Skip(inicio).Take(ProPorPagina);
        }
    }
}