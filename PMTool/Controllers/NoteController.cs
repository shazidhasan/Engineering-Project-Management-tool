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
    
    public class NoteController : ApiController
    {
        NoteRepository noteRepo;
        public NoteController()
        {
            noteRepo = new NoteRepository();
        }
       

        [Route("api/note/{taskId}")]
        [HttpGet]
        public IHttpActionResult Get(int taskId)
        {
            return Ok(noteRepo.GetAllNoteByTaskID(taskId));
        }

       

        [Route("api/note")]
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(noteRepo.GetAll());
        }

        

        // POST: api/ProjectStatus
        [Route("api/note")]
        [HttpPost]
        public IHttpActionResult Post([FromBody]Note note)
        {
            noteRepo.SaveOrUpdate(note);
            return Ok(new { Status = "success", ID = note.ID });
        }

        // PUT: api/ProjectStatus/5
        [Route("api/note")]
        [HttpPut]
        public IHttpActionResult Put([FromBody]Note note)
        {
            noteRepo.SaveOrUpdate(note);
            return Ok(new { Status = "success" });
        }

        // DELETE: api/ProjectStatus/5
        [Route("api/note")]
        [HttpDelete]
        public void Delete(int id)
        {
            noteRepo.Remove(id);
        }
    }
}
