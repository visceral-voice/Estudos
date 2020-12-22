using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Web.Mvc;

namespace Avaliacao.Models
{
    [Table("produtos")]
    public class Produto
    {
        public string Id { get; set; }
        public string Nome { get; set; }
        public string Categoria_Id { get; set; }
        public decimal Preco { get; set; }

        [DisplayName("Categoria")]
        public IEnumerable<SelectListItem> Categoria { get; set; }

    }
}