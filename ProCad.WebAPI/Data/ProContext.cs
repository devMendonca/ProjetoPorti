using Microsoft.EntityFrameworkCore;

namespace ProCad.WebAPI.Data
{
    public class ProContext : DbContext

    {
        public ProContext(DbContextOptions<ProContext> options) : base(options) {}
       public DbSet<Product> Products { get; set; }
        
    }
}