using ProducteevLikeSite.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProducteevLikeSite.Models
{
    public class Note : BaseEntity
    {
        public int TaskId { get; set; }
        public string Comment { get; set; }
        public int CreatedByEmployeeId {get; set;}
    }
}