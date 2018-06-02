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
    public class ProjectPriorityController : ApiController
    {
            ProjectPriorityRepository ProjectPriorityRepo;
            public ProjectPriorityController()
            {
                ProjectPriorityRepo = new ProjectPriorityRepository();
            }

            // GET: api/ProjectPriority
            public IHttpActionResult Get()
            {
                return Ok(ProjectPriorityRepo.GetAll());
            }

            // GET: api/ProjectPriority/5
            public IHttpActionResult Get(int id)
            {
                return Ok(ProjectPriorityRepo.GetByID(id));
            }

            // POST: api/ProjectPriority
            public IHttpActionResult Post([FromBody]ProjectPriority ProjectPriorityData)
            {
                ProjectPriorityRepo.SaveOrUpdate(ProjectPriorityData);
                return Ok(new { Status = "success", ID = ProjectPriorityData.ID });
            }

            // PUT: api/ProjectPriority/5
            public IHttpActionResult Put([FromBody]ProjectPriority ProjectPriorityData)
            {
                ProjectPriorityRepo.SaveOrUpdate(ProjectPriorityData);
                return Ok(new { Status = "success" });
            }

            // DELETE: api/ProjectPriority/5
            public void Delete(int id)
            {
                ProjectPriorityRepo.Remove(id);
            }
        }
}
