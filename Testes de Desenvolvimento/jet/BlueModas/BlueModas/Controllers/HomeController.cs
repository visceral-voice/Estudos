using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BlueModas.Models;
using BlueModas.Helpers;
using Newtonsoft.Json;
using System.Net.Http;
using System.Threading.Tasks;

namespace BlueModas.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Aqui você encontra a mais completa variedade de produtos da moda.";
            return View();
        }

        [HttpGet]
        public async Task<ActionResult> ListaProdutos()
        {
            var client = WebApiHttpClient.GetClient();
            client.BaseAddress = new Uri(client.BaseAddress + "api/Produtos");
            client.Timeout = TimeSpan.FromMinutes(10);
            HttpResponseMessage response = await client.GetAsync(client.BaseAddress);

            if (response.IsSuccessStatusCode)
            {
                string content = await response.Content.ReadAsStringAsync(); 
                var produtos = JsonConvert.DeserializeObject<IEnumerable<Produtos>>(content);
                return Json(produtos, JsonRequestBehavior.AllowGet);

            }
            else
            {
                return Content("Ocorreu um erro: " + response.StatusCode);
            }
        }

        public ActionResult About()
        {
            ViewBag.Message = "Aqui você encontra a mais completa variedade de produtos da moda.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "www.bluemodas.com.br";

            return View();
        }

    }
}