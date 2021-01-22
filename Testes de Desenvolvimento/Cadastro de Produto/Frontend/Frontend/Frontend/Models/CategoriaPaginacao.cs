using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Frontend.Models
{
    public class CategoriaPaginacao
    {
        public string Id { get; set; }
        public string Nome { get; set; }
        public IEnumerable<Categoria> Categorias { get; set; }
        public int CatPorPagina { get; set; }
        public int PaginaAtual { get; set; }

        public int Contador()
        {
            return Convert.ToInt32(Math.Ceiling(Categorias.Count() / (double)CatPorPagina));
        }

        public IEnumerable<Categoria> CategoriaPaginada()
        {
            int inicio = (PaginaAtual - 1) * CatPorPagina;
            return Categorias.OrderBy(c => c.Id).Skip(inicio).Take(CatPorPagina);
        }
    }
}