﻿using ProducteevLikeSite.Models;
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
    
    public class ProjectStatusController : ApiController
    {
        ProjectStatusRepository projectStatusRepo;
        public ProjectStatusController()
        {
            projectStatusRepo = new ProjectStatusRepository();
        }

        // GET: api/ProjectStatus
        public IHttpActionResult Get()
        {
            return Ok(projectStatusRepo.GetAll());
        }

        // GET: api/ProjectStatus/5
        public IHttpActionResult Get(int id)
        {
            return Ok(projectStatusRepo.GetByID(id));
        }

        // POST: api/ProjectStatus
        public IHttpActionResult Post([FromBody]ProjectStatus projectStatusData)
        {
            projectStatusRepo.SaveOrUpdate(projectStatusData);
            return Ok(new { Status = "success", ID = projectStatusData.ID });
        }

        // PUT: api/ProjectStatus/5
        public IHttpActionResult Put([FromBody]ProjectStatus projectStatusData)
        {
            projectStatusRepo.SaveOrUpdate(projectStatusData);
            return Ok(new { Status = "success" });
        }

        // DELETE: api/ProjectStatus/5
        public void Delete(int id)
        {
            projectStatusRepo.Remove(id);
        }


    }
}
