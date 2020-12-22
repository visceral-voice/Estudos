using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlueModas.Models
{
    public class Cliente
    {
        public long Id { get; set; }
        public string Nome { get; set; }
        public string e_mail { get; set; }
        public string telefone { get; set; }
    }
}