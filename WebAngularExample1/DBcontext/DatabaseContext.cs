using Microsoft.EntityFrameworkCore;
using WebAngularExample1.Models;

namespace WebAngularExample1.DBcontext
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
                
        }

        public DbSet<CountryMaster> CountryMaster { get; set; }
    }
}
