using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlueModas.Models
{
    public class Produtos
    {
        public long Id { get; set; }
        public string Nome { get; set; }
        public string imagem { get; set; }
        public decimal Preco { get; set; }
    }
}