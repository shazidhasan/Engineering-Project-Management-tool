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
    public class ProjectController : ApiController
    {
        ProjectRepository projectRepo;
        public ProjectController()
        {
            projectRepo = new ProjectRepository();
        }

        [Route("api/project")]
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(projectRepo.GetAll()) ;
        }

        //[Route("api/proposal")]
        //[HttpGet]
        //public IHttpActionResult GetProposals()
        //{
        //    return Ok(projectRepo.GetProposals());
        //}




        [Route("api/project/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            return Ok(projectRepo.GetByID(id));
        }

        [Route("api/project")]
        [HttpPost]
        public IHttpActionResult Post([FromBody]Project projectData)
        {
            projectData.StartDate = DateTime.Now;
            projectData.DueDate = DateTime.Now;
            projectData.CreatedDate = DateTime.Now;
            
            projectRepo.SaveOrUpdate(projectData);
            return Ok(new { Status="success", ID=projectData.ID });
        }

        [Route("api/project")]
        [HttpPut]
        public IHttpActionResult Put([FromBody]Project projectData)
        {            
            projectRepo.SaveOrUpdate(projectData);
            return Ok(new { Status = "success"});
        }

        [Route("api/project")]
        [HttpDelete]
        public void Delete(int id)
        {
            projectRepo.Remove(id);
        }
    }
}
