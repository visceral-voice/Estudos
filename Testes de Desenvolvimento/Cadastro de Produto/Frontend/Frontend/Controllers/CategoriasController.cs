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
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.IO;
using System.Web.Script.Serialization;

namespace Frontend.Controllers
{
    public class CategoriasController : Controller
    {
        static HttpClient client = new HttpClient();
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
                    CatPorPagina = 5,
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

        // GET: Categorias/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Categorias/Create
        // Para proteger-se contra ataques de excesso de postagem, ative as propriedades específicas às quais deseja se associar. 
        // Para obter mais detalhes, confira https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(String Nome)
        {
            try {

                Categoria_Salvar categoria = new Categoria_Salvar
                {
                    Nome = Nome
                };
                var client = WebApiHttpClient.GetClient(); 
                string categoriaJSON = JsonConvert.SerializeObject(categoria); 
                HttpContent content = new StringContent(categoriaJSON, System.Text.Encoding.Unicode, "application/json");

                client.BaseAddress = new Uri(client.BaseAddress + "Categorias");
                client.Timeout = TimeSpan.FromMinutes(10);
                var response = await client.PostAsync(client.BaseAddress, content); 

                if (response.IsSuccessStatusCode) { 
                    return RedirectToAction("Index"); 
                } else { 
                    return Content("Ocorreu um erro: " + response.StatusCode); 
                } 
            } catch { 
                return Content("Ocorreu um erro."); 
            }

        }

        [HttpGet]
        // GET: Categorias/Edit/5
        public async Task<ActionResult> Edit(String id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var client = WebApiHttpClient.GetClient();
            client.BaseAddress = new Uri(client.BaseAddress + "Categorias/"+ id);
            client.Timeout = TimeSpan.FromMinutes(10);
            HttpResponseMessage response = await client.GetAsync(client.BaseAddress);

            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync();
                Categoria categoria = JsonConvert.DeserializeObject<Categoria>(content);

                if (categoria == null)
                {
                    return HttpNotFound();
                }
                return View(categoria);
            }
            else
            {
                return Content("Ocorreu um erro: " + response.StatusCode);
            }
        }

        // PUT: Categorias/Edit/5
        [HttpPut]
        [ValidateAntiForgeryToken]
        public async Task<Categoria> Edit(Categoria categoria)
        {
            try
            {
                //var client = WebApiHttpClient.GetClient();
                //string categoriaJSON = JsonConvert.SerializeObject(categoria);
                //HttpContent content = new StringContent(categoriaJSON, System.Text.Encoding.Unicode, "application/json");

                //client.BaseAddress = new Uri(client.BaseAddress + "Categorias/" + categoria.Id);
                //client.Timeout = TimeSpan.FromMinutes(10);
                //var response = await client.PutAsJsonAsync(client.BaseAddress, content);
                client.BaseAddress = new Uri("https://localhost:44396/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(
                    new MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = await client.PutAsJsonAsync(
                $"api/Categorias/{categoria.Id}", categoria);
                response.EnsureSuccessStatusCode();

                return categoria;

                //if (response.IsSuccessStatusCode)
                //{
                //    return RedirectToAction("Index");
                //}
                //else
                //{
                //    return Content("Ocorreu um erro: " + response.StatusCode);

                //}
            }
            catch
            {
                //return Content("Ocorreu um erro.");
                return categoria;
            }
        }

    }
}
