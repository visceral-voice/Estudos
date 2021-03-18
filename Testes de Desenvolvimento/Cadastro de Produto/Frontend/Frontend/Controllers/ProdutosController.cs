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
    public class ProdutosController : Controller
    {

        List<Categoria> Categorias;

        private async Task<List<Categoria>> GetCategorias() 
        {

            List<Categoria> Cat;

            var client = WebApiHttpClient.GetClient();
            HttpResponseMessage responseCat = await client.GetAsync($"Categorias");

            if (responseCat.IsSuccessStatusCode)
            {
                string contentCat = await responseCat.Content.ReadAsStringAsync();
                Cat = (List<Categoria>)JsonConvert.DeserializeObject<IEnumerable<Categoria>>(contentCat);
                return Cat;
            }
            else
            {
                return null;
            }
        }

        // GET: Produtos
        public async Task<ActionResult> Index(int? Pagina)
        {
            if (Pagina == null)
            {
                Pagina = 1;
            }
            int page = Convert.ToInt32(Pagina);

            Categorias = await GetCategorias();

            if (Categorias == null)
            {
                Content("Ocorreu um erro ao buscar categorias");
            }

            var client = WebApiHttpClient.GetClient();
            HttpResponseMessage responsePro = await client.GetAsync($"Produtos");

            if (responsePro.IsSuccessStatusCode)
            {
                string contentPro = await responsePro.Content.ReadAsStringAsync();
                var prod = JsonConvert.DeserializeObject<IEnumerable<Produto>>(contentPro);

                List<ProdutoViewModel> produtoViewModels = new List<ProdutoViewModel>();

                foreach (var item in prod)
                {
                    ProdutoViewModel produtoViewModel = new ProdutoViewModel(item);
                    string Nome = Categorias.Find(cat => cat.Id == item.Categoria_Id).Nome;
                    produtoViewModel.Categoria_Nome = Nome;
                    produtoViewModels.Add(produtoViewModel);
                }

                ProdutoPaginacao produtopaginacao = new ProdutoPaginacao()
                {
                    ProPorPagina = 10,
                    Produtos = produtoViewModels.OrderBy(p => p.Id),
                    PaginaAtual = page
                };
                return View(produtopaginacao);

            }
            else
            {
                return Content("Ocorreu um erro: " + responsePro.StatusCode);
            }
        }

        [HttpGet]
        // GET: Produtod/5
        public async Task<ActionResult> Details(String id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Categorias = await GetCategorias();

            if (Categorias == null)
            {
                Content("Ocorreu um erro ao buscar categorias");
            }

            var client = WebApiHttpClient.GetClient();
            HttpResponseMessage response = await client.GetAsync($"Produtos/{id}");

            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync();
                var prod = JsonConvert.DeserializeObject<Produto>(content);

                if (prod == null)
                {
                    return HttpNotFound();
                }

                ProdutoViewModel produtoViewModel = new ProdutoViewModel(prod);
                string Nome = Categorias.Find(cat => cat.Id == prod.Categoria_Id).Nome;
                produtoViewModel.Categoria_Nome = Nome;

                return View(produtoViewModel);
            }
            else
            {
                return Content("Ocorreu um erro: " + response.StatusCode);
            }
        }

    }
}
