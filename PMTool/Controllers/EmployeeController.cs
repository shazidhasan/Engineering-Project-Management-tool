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
    
    public class EmployeeController : ApiController
    {
        EmployeeRepository employeeRepo;
        public EmployeeController()
        {
            employeeRepo = new EmployeeRepository();
        }

        [Route("api/Employee")]
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(employeeRepo.GetAll());
        }

        [Route("api/Employee/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            return Ok(employeeRepo.GetByID(id));
        }

        [Route("api/Employee")]
        [HttpPost]
        public IHttpActionResult Post([FromBody]Employee employee)
        {
            employeeRepo.SaveOrUpdate(employee);
            return Ok(new { Status = "success", ID = employee.ID });
        }

        [Route("api/Employee")]
        [HttpPut]
        public IHttpActionResult Put([FromBody]Employee employee)
        {
            employeeRepo.SaveOrUpdate(employee);
            return Ok(new { Status = "success" });
        }

        [Route("api/Employee")]
        [HttpDelete]
        public void Delete(int id)
        {
            employeeRepo.Remove(id);
        }
    }
}
