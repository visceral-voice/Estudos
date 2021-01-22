using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Mvc;
using Frontend.Models;
using Frontend.Helpers;
using Newtonsoft.Json;

namespace Frontend.Controllers
{
    public class CategoriasController : Controller
    {
        // GET: Categorias
        public async Task<ActionResult> Index(string Pagina)
        {
            if (Pagina == null)
            {
                Pagina = "1";
            }
            int page = Convert.ToInt32(Pagina);

            var client = WebApiHttpClient.GetClient();
            client.BaseAddress = new Uri(client.BaseAddress + "Categorias");
            client.Timeout = TimeSpan.FromMinutes(10);
            HttpResponseMessage response = await client.GetAsync(client.BaseAddress);

            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync();
                var categorias = JsonConvert.DeserializeObject<IEnumerable<Categoria>>(content);
                CategoriaPaginacao categoriapaginacao = new CategoriaPaginacao
                {
                    CatPorPagina = 3,
                    Categorias = categorias,
                    PaginaAtual = page
                };
                return View(categoriapaginacao);

            }
            else
            {
                return Content("Ocorreu um erro: " + response.StatusCode);
            }
        }

    }
}
