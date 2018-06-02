using ProducteevLikeSite.Models;
using ProducteevLikeSite.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProducteevLikeSite.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    
    public class TaskStatusController : ApiController
    {
        TaskStatusRepository taskStatusRepo;
        public TaskStatusController()
        {
            taskStatusRepo = new TaskStatusRepository();
        }

        // GET: api/ProjectStatus
        public IHttpActionResult Get()
        {
            return Ok(taskStatusRepo.GetAll());
        }

        // GET: api/ProjectStatus/5
        public IHttpActionResult Get(int id)
        {
            return Ok(taskStatusRepo.GetByID(id));
        }

        // POST: api/ProjectStatus
        public IHttpActionResult Post([FromBody]Task task)
        {
            taskStatusRepo.SaveOrUpdate(task);
            return Ok(new { Status = "success", ID = task.ID });
        }

        // PUT: api/ProjectStatus/5
        public IHttpActionResult Put([FromBody]Task task)
        {
            taskStatusRepo.SaveOrUpdate(task);
            return Ok(new { Status = "success" });
        }

        // DELETE: api/ProjectStatus/5
        public void Delete(int id)
        {
            taskStatusRepo.Remove(id);
        }


    }
}
