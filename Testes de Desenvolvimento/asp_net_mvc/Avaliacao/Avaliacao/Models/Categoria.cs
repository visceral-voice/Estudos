using System.ComponentModel.DataAnnotations.Schema;

namespace Avaliacao.Models
{
    [Table("categorias")]
    public class Categoria
    {
        public string Id { get; set; }

        public string Nome { get; set; }
    }
}