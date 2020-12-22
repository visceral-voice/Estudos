using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Mvc;
using BlueModas.Helpers;
using BlueModas.Models;
using Newtonsoft.Json;

namespace BlueModas.Controllers
{
    public class PedidosController : Controller
    {
        // GET: Pedidos
        public ActionResult Index()
        {
            Pedidos pedido = RetornaPedidos();
            return View(pedido);
        }

        public async Task<ActionResult> AdicionaProduto(long id)
        {
            Pedidos pedidos = RetornaPedidos() ?? new Pedidos();

            var client = WebApiHttpClient.GetClient();
            client.BaseAddress = new Uri(client.BaseAddress + "api/Produtos/" + id);
            client.Timeout = TimeSpan.FromMinutes(10);
            HttpResponseMessage response = await client.GetAsync(client.BaseAddress);

            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync();
                Produtos produto = JsonConvert.DeserializeObject<Produtos>(content);
                ProdutoPedido produtoPedido = new ProdutoPedido();
                produtoPedido.Id = produto.Id;
                produtoPedido.PrecoUnitario = produto.Preco;
                produtoPedido.Qtde = 1;
                produtoPedido.Nome = produto.Nome;
                produtoPedido.PrecoTotal = produto.Preco;
                int index;
                if (pedidos.Produtos.Count > 0)
                {
                    index = pedidos.Produtos.FindIndex(x => x.Id == id);
                    if (index != -1)
                    {
                        pedidos.Produtos[index].Qtde++;
                        pedidos.Produtos[index].PrecoTotal += produto.Preco;
                    }
                    else
                    {
                        pedidos.Produtos.Add(produtoPedido);
                    }
                } else
                {
                    pedidos.Produtos.Add(produtoPedido);
                }
                Session["pedido"] = pedidos;
            }
            else
            {
                Content("Ocorreu um erro: " + response.StatusCode);
            }

            ViewBag.Somapedido = SomaProdutos();

            return RedirectToAction("Index", "Home");
        }

        public async Task<ActionResult> RemoveProduto(long id)
        {
            Pedidos pedidos = RetornaPedidos();

            var client = WebApiHttpClient.GetClient();
            client.BaseAddress = new Uri(client.BaseAddress + "api/Produtos/" + id);
            client.Timeout = TimeSpan.FromMinutes(10);
            HttpResponseMessage response = await client.GetAsync(client.BaseAddress);

            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync();
                Produtos produto = JsonConvert.DeserializeObject<Produtos>(content);
                int index;
                index = pedidos.Produtos.FindIndex(x => x.Id == id);
                pedidos.Produtos[index].Qtde--;
                pedidos.Produtos[index].PrecoTotal -= produto.Preco;
                if (pedidos.Produtos[index].Qtde == 0)
                {
                    pedidos.Produtos.RemoveAt(index);
                }
                Session["pedido"] = pedidos;
            }
            else
            {
                Content("Ocorreu um erro: " + response.StatusCode);
            }
            ViewBag.Somapedido = SomaProdutos();
            return RedirectToAction("Index", "Pedidos");
        }

        public async Task<ActionResult> AddProduto(long id)
        {
            Pedidos pedidos = RetornaPedidos();

            var client = WebApiHttpClient.GetClient();
            client.BaseAddress = new Uri(client.BaseAddress + "api/Produtos/" + id);
            client.Timeout = TimeSpan.FromMinutes(10);
            HttpResponseMessage response = await client.GetAsync(client.BaseAddress);

            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync();
                Produtos produto = JsonConvert.DeserializeObject<Produtos>(content);
                int index;
                index = pedidos.Produtos.FindIndex(x => x.Id == id);
                pedidos.Produtos[index].Qtde++;
                pedidos.Produtos[index].PrecoTotal += produto.Preco;
                Session["pedido"] = pedidos;
            }
            else
            {
                Content("Ocorreu um erro: " + response.StatusCode);
            }
            ViewBag.Somapedido = SomaProdutos();
            return RedirectToAction("Index", "Pedidos");
        }

        public decimal SomaProdutos()
        {
            Pedidos pedidos = RetornaPedidos();
            decimal soma = 0;

            for(int c = 0; c < pedidos.Produtos.Count; c++)
            {
                soma += pedidos.Produtos[c].PrecoTotal;
            }
            return soma;
        }

        public Pedidos RetornaPedidos()
        {
            Pedidos pedidos = Session["pedido"] != null ? (Pedidos)Session["pedido"] : new Pedidos();
            return pedidos;
        }
    }
}