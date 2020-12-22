using BlueModas.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using BlueModas.Helpers;
using System.Net.Http;
using Newtonsoft.Json;

namespace BlueModas.Controllers
{
    public class ClientesController : Controller
    {
        private const string Cadastrar = @"~/Views/Clientes/Cadastro/Index.cshtml";
        private const string Fechar = @"~/Views/Pedidos/Fechar/Index.cshtml";

        // GET: CLientes
        public ActionResult Index()
        {
            return View();
        }

        public async Task<ActionResult> Buscar(String Email)
        {
            Cliente cliente = new Cliente();

            var client = WebApiHttpClient.GetClient();
            client.BaseAddress = new Uri(client.BaseAddress + "api/Clientes/Buscar/" + Email);
            client.Timeout = TimeSpan.FromMinutes(10);
            HttpResponseMessage response = await client.GetAsync(client.BaseAddress);

            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync();
                cliente = JsonConvert.DeserializeObject<Cliente>(content);
                if (cliente.Id != 0)
                {
                    Pedidos pedido = Session["pedido"] != null ? (Pedidos)Session["pedido"] : new Pedidos();
                    pedido.cliente = cliente;
                    Session["pedido"] = pedido;
                    //PedidosController pedidosController = new PedidosController();
                    //ViewBag.Somapedido = pedidosController.SomaProdutos();
                    return View(Fechar, pedido);
                }
            }
            return View(Cadastrar);
        }

        public async Task<ActionResult> Incluir(String Nome, String Telefone, String Email)
        {
            var client = WebApiHttpClient.GetClient();
            client.BaseAddress = new Uri(client.BaseAddress + "api/Clientes");
            client.Timeout = TimeSpan.FromMinutes(10);
            HttpResponseMessage response = await client.GetAsync(client.BaseAddress);

            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync();
                var clientes = JsonConvert.DeserializeObject<IEnumerable<Cliente>>(content);

                Cliente cliente = new Cliente
                {
                    Id = clientes.Count() + 1,
                    Nome = Nome,
                    telefone = Telefone,
                    e_mail = Email
                };

                response = await client.PostAsJsonAsync(client.BaseAddress, cliente);
                if (response.IsSuccessStatusCode)
                {
                    Pedidos pedido = Session["pedido"] != null ? (Pedidos)Session["pedido"] : new Pedidos();
                    pedido.cliente = cliente;
                    Session["pedido"] = pedido;
                    //PedidosController pedidosController = new PedidosController();
                    //ViewBag.Somapedido = pedidosController.SomaProdutos();
                    return View(Fechar, pedido);
                } else
                {
                    return Content("Ocorreu um erro: " + response.StatusCode);
                }
            }
            else
            {
                return Content("Ocorreu um erro: " + response.StatusCode);
            }

        }
    }
}