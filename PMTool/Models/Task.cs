using ProducteevLikeSite.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProducteevLikeSite.Models
{
    public class Task :BaseEntity
    {
        public string TaskName { get; set; }
        public int ProjectID { get; set; }
        public int TaskStatusID { get; set; }
        public int DesignByEmployeeID { get; set; }
        public DateTime Deadline { get; set; }
        public string ShortDescription { get; set; }
        public string FullDescription { get; set; }
        public string NewReviewNotes { get; set; }
        public string ReviewNotes { get; set; }
        public bool TaskForProject { get; set; }
    }
}