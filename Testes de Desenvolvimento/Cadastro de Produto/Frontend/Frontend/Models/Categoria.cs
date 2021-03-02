using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Frontend.Models
{
    [Table("categorias")]
    public class Categoria
    {
        [Required]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }
        [Required]
        public string Nome { get; set; }
    }

    public class Categoria_Salvar
    {
        public string Nome { get; set; }
    }
}