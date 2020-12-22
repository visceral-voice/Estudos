using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Security.Cryptography.Xml;
using System.Web.Mvc;
using Avaliacao.Models;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Avaliacao.Controllers
{
    public class ProdutosController : Controller
    {
        private readonly ApplicationDbContext db = new ApplicationDbContext();

        // GET: Produtos
        public ActionResult Index(string Pagina)
        {
            if (Pagina == null)
            {
                Pagina = "1";
            }
            int page = Convert.ToInt32(Pagina);
            List<Categoria> Categoria = db.Categorias.OrderBy(x => x.Id).ToList();
            var prod = db.Produtos.OrderBy(c => c.Id);
            List<ProdutoViewModel> produtoViewModels = new List<ProdutoViewModel>(); 

            foreach(var item in prod) 
            {
                ProdutoViewModel produtoViewModel = new ProdutoViewModel(item);
                string Nome = Categoria.Find(cat => cat.Id == item.Categoria_Id).Nome;
                produtoViewModel.Categoria_Nome = Nome;
                produtoViewModels.Add(produtoViewModel);
            }

            ProdutoPaginacao produtopaginacao = new ProdutoPaginacao()
            {
                ProPorPagina = 10,
                Produtos = produtoViewModels.OrderBy(p=>p.Id),
                PaginaAtual = page
            };
            return View(produtopaginacao);
        }

        // GET: Produtos/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Produto produto = db.Produtos.Find(id);
            if (produto == null)
            {
                return HttpNotFound();
            }
            ProdutoViewModel produtoViewModel = new ProdutoViewModel(produto);
            produtoViewModel.Categoria_Nome = db.Categorias.Find(produto.Categoria_Id).Nome;
            return View(produtoViewModel);
        }

        // GET: Produtos/Create
        public ActionResult Create()
        {
            ViewBag.Categoria = new SelectList(db.Categorias.OrderBy(x => x.Nome), "Id", "Nome");
            return View();
        }

        // POST: Produtos/Create
        // Para proteger-se contra ataques de excesso de postagem, ative as propriedades específicas às quais deseja se associar. 
        // Para obter mais detalhes, confira https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Nome,Categoria_Id,Preco")] Produto produto)
        {
            if (ModelState.IsValid)
            {
                //produto.Categoria = new SelectList(db.Categorias.OrderBy(x => x.Nome), "Id", "Nome");
                db.Produtos.Add(produto);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            //ViewBag.Categoria = new SelectList(db.Categorias.OrderBy(x => x.Nome), "Id", "Nome", produto.Categoria_Id);
            return View(produto);
        }

        // GET: Produtos/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Produto produto = db.Produtos.Find(id);
            if (produto == null)
            {
                return HttpNotFound();
            }
            //produto.Categoria = new SelectList(db.Categorias.OrderBy(x => x.Nome), "Id", "Nome");
            ViewBag.Categoria = new SelectList(db.Categorias.OrderBy(x => x.Nome), "Id", "Nome", db.Categorias.Find(produto.Categoria_Id).Nome);
            return View(produto);
        }

        // POST: Produtos/Edit/5
        // Para proteger-se contra ataques de excesso de postagem, ative as propriedades específicas às quais deseja se associar. 
        // Para obter mais detalhes, confira https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Nome,Categoria_Id,Preco")] Produto produto)
        {
            if (ModelState.IsValid)
            {
                db.Entry(produto).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(produto);
        }

        // GET: Produtos/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Produto produto = db.Produtos.Find(id);
            if (produto == null)
            {
                return HttpNotFound();
            }
            ProdutoViewModel produtoViewModel = new ProdutoViewModel(produto);
            produtoViewModel.Categoria_Nome = db.Categorias.Find(produto.Categoria_Id).Nome;
            return View(produtoViewModel);
        }

        // POST: Produtos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            Produto produto = db.Produtos.Find(id);
            db.Produtos.Remove(produto);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
