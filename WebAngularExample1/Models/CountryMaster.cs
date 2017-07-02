using System.ComponentModel.DataAnnotations;

namespace WebAngularExample1.Models
{
    public class CountryMaster
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
    }
}
