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
    
    public class CustomerController : ApiController
    {
        CustomerRepository customerRepo;
        public CustomerController()
        {
            customerRepo = new CustomerRepository();
        }

        [Route("api/Customer")]
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(customerRepo.GetAll());
        }


        [Route("api/ProspectiveCustomer")]
        [HttpGet]
        public IHttpActionResult GetAllProspectiveCustomer()
        {
            return Ok(customerRepo.GetAllProspectiveCustomer());
        }

        [Route("api/ProspectiveCustomer/{id}")]
        [HttpGet]
        public IHttpActionResult GetProspectiveCustomerById(int id)
        {
            return Ok(customerRepo.GetProspectiveCustomerById(id));
        }



        [Route("api/Customer/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            return Ok(customerRepo.GetByID(id));
        }

        [Route("api/Customer")]
        [HttpPost]
        public IHttpActionResult Post([FromBody]Customer customer)
        {
            customerRepo.SaveOrUpdate(customer);
            return Ok(new { Status = "success", ID = customer.ID });
        }

        [Route("api/Customer")]
        [HttpPut]
        public IHttpActionResult Put([FromBody]Customer customer)
        {
            customerRepo.SaveOrUpdate(customer);
            return Ok(new { Status = "success" });
        }

        [Route("api/Customer")]
        [HttpDelete]
        public void Delete(int id)
        {
            customerRepo.Remove(id);
        }


    }
}
