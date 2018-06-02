using ProducteevLikeSite.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProducteevLikeSite.Models
{
    public class Employee : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Name { get; set; }
        public string Designation { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Zip { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Address { get; set; }        
        public bool HasReviewAuthorization { get; set; }
        public bool IsInManagement { get; set; }
        public bool IsInDirectorPanel { get; set; }
    }
}