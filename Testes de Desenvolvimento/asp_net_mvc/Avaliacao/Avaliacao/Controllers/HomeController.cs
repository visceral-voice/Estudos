using System.Web.Mvc;

namespace Avaliacao.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "ASP NET MVC (C#), MySQL, HTML5, CSS3, Bootstrap.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "";

            return View();
        }
    }
}