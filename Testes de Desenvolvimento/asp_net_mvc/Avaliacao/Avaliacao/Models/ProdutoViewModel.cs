﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Avaliacao.Models
{
    public class ProdutoViewModel
    {
        public string Id { get; set; }
        public string Nome { get; set; }
        public string Categoria_Id { get; set; }
        public string Categoria_Nome { get; set; }
        public decimal Preco { get; set; }
        public ProdutoViewModel(Produto produto) 
        {
            this.Id = produto.Id;
            this.Nome = produto.Nome;
            this.Categoria_Id = produto.Categoria_Id;
            this.Preco = produto.Preco;
        }
    }
}