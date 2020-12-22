using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlueModas.Models
{
    public class ProdutoPedido
    {
        public long Id { get; set; }
        public string Nome { get; set; }
        public int Qtde { get; set; }
        public decimal PrecoUnitario { get; set; }
        public decimal PrecoTotal { get; set; }


    }
}