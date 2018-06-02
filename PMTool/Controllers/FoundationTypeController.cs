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
    
    public class FoundationTypeController : ApiController
    {
        FoundationTypeRepository foundationTypeRepo;
        public FoundationTypeController()
        {
            foundationTypeRepo = new FoundationTypeRepository();
        }

        // GET: api/FoundationType
        public IHttpActionResult Get()
        {
            return Ok(foundationTypeRepo.GetAll());
        }

        // GET: api/FoundationType/5
        public IHttpActionResult Get(int id)
        {
            return Ok(foundationTypeRepo.GetByID(id));
        }

        // POST: api/FoundationType
        public IHttpActionResult Post([FromBody]FoundationType FoundationTypeData)
        {
            foundationTypeRepo.SaveOrUpdate(FoundationTypeData);
            return Ok(new { Status = "success", ID = FoundationTypeData.ID });
        }

        // PUT: api/FoundationType/5
        public IHttpActionResult Put([FromBody]FoundationType FoundationTypeData)
        {
            foundationTypeRepo.SaveOrUpdate(FoundationTypeData);
            return Ok(new { Status = "success" });
        }

        // DELETE: api/FoundationType/5
        public void Delete(int id)
        {
            foundationTypeRepo.Remove(id);
        }


    }
}
