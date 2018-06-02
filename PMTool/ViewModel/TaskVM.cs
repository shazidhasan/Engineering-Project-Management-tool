using ProducteevLikeSite.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProducteevLikeSite.Models
{
    public class TaskVM :Task
    {        
        public string ProjectName { get; set; }        
        public string TaskStatus { get; set; }        
        public string DesignByEmployee { get; set; }
    }
}