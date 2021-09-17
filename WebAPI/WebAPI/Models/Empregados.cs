
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_ITBIT.Models
{
    public class Usuario
    {
        public int UsuarioId { get; set; }
        public string Nome { get; set; }
        public string Usuario { get; set; }
        public string DataNascimento { get; set; }
        public string Email { get; set; }

    }
}
