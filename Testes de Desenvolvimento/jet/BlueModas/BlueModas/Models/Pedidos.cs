using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlueModas.Models
{
    public class Pedidos
    {
        public Guid PedidoId { get; set; }

        public Cliente cliente { get; set; }
        public List<ProdutoPedido> Produtos { get; set; }
        public Pedidos()
        {
            this.PedidoId = Guid.NewGuid();
            this.Produtos = new List<ProdutoPedido>();
            this.cliente = new Cliente();
        }

    }
}