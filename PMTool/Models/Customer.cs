using ProducteevLikeSite.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProducteevLikeSite.Models
{
    public class Customer : BaseEntity
    {
        public string Title { get; set; }
        public string KeyPerson { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string Phone { get; set; }
        public string AltPhone { get; set; }
        public string Email { get; set; }
        public string Notes { get; set; }        
        public bool IsProspect { get; set; }
    }
}