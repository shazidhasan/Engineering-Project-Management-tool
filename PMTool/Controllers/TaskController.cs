using ProducteevLikeSite.Models;
using ProducteevLikeSite.Repository;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProducteevLikeSite.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    
    public class TaskController : ApiController
    {
        TaskRepository TaskRepo;
        public TaskController()
        {
            TaskRepo = new TaskRepository();
        }

        // GET: api/Task/5
        //[Route("{projectId:int}")] // ALSO NOTE THAT THE PARAMETER NAMES HAVE TO MATCH
        //public IHttpActionResult Get(int projectId)
        //{
        //    return Ok(TaskRepo.GetAllTaskByProjectID(projectId));
        //}

        [Route("api/task/project/{projectId}")]
        [HttpGet]
        public IHttpActionResult Get(int projectId,int x = 0)
        {
            return Ok(TaskRepo.GetAllTaskByProjectID(projectId));
        }

        [Route("api/task/proposal/{projectId}")]
        [HttpGet]
        public IHttpActionResult Get(int projectId, int x = 0,int y = 0)
        {
            return Ok(TaskRepo.GetAllTaskByProposalID(projectId));
        }


        

        [Route("api/task/employee/{employeeId}")]
        [HttpGet]
        public IHttpActionResult GetTaskByemployeeId(int employeeId)
        {
            return Ok(TaskRepo.GetAllTaskByEmployeeID(employeeId));
        }

        [Route("api/task/client/{clientId}")]
        [HttpGet]
        public IHttpActionResult GetTaskByClientId(int clientId)
        {
            return Ok(TaskRepo.GetAllTaskByClientID(clientId));
        }



        [Route("api/task/{taskId}")]
        [HttpGet]
        public IHttpActionResult Get(int taskId)
        {                        
                return Ok(TaskRepo.GetByID(taskId));
        }

        [Route("api/task")]
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(TaskRepo.GetAll());
        }

        





        //// GET: api/ProjectStatus/5
        //public IHttpActionResult Get(int id)
        //{
        //    return Ok(TaskRepo.GetByID(id));
        //}

        // POST: api/ProjectStatus
        [Route("api/task")]
        [HttpPost]
        public IHttpActionResult Post([FromBody]Task task)
        {
            TaskRepo.SaveOrUpdate(task);
            return Ok(new { Status = "success", ID = task.ID });
        }

        // PUT: api/ProjectStatus/5
        [Route("api/task")]
        [HttpPut]
        public IHttpActionResult Put([FromBody]Task task)
        {
            TaskRepo.SaveOrUpdate(task);
            return Ok(new { Status = "success" });
        }

        // DELETE: api/ProjectStatus/5
        [Route("api/task")]
        [HttpDelete]
        public void Delete(int id)
        {
            TaskRepo.Remove(id);
        }


    }
}
