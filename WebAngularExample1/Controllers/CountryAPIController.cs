using Microsoft.AspNetCore.Mvc;
using System.Linq;
using WebAngularExample1.DBcontext;
using WebAngularExample1.Models;

namespace WebAngularExample1.Controllers
{
    [Route("api/[controller]")]
    public class CountryAPIController : Controller
    {
        private DatabaseContext _DatabaseContext;
        public CountryAPIController(DatabaseContext DatabaseContext)
        {
            _DatabaseContext = DatabaseContext;
        }

        // GET: api/values
        [HttpGet]
        public CountryMaster[] Get()
        {
            var listofCountry = _DatabaseContext.CountryMaster.ToList();
            return listofCountry.ToArray();
        }

    }
}
