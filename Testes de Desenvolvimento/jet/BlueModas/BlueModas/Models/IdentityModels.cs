using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace BlueModas.Models
{
    public class ApplicationUser : IdentityUser
    {
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection")
        {
        }

        public DbSet<Pedidos> pedidos { get; set; }

    }
}