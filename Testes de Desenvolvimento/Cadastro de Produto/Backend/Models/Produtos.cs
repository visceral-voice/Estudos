using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Produto
    {
        public long Id { get; set; }
        public string Nome { get; set; }
        public string imagem { get; set; }
        public decimal Preco { get; set; }
    }
}
