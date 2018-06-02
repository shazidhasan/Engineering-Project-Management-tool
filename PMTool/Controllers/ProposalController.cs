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
    
    public class ProposalController : ApiController
    {
        ProposalRepository ProposalRepo;
        public ProposalController()
        {
            ProposalRepo = new ProposalRepository();
        }

        [Route("api/Proposal")]
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(ProposalRepo.GetAll());
        }


        [Route("api/ProspectiveProposal")]
        [HttpGet]
        public IHttpActionResult GetAllProspectiveProposal()
        {
            return Ok(ProposalRepo.GetAllProspectiveProposal());
        }

        [Route("api/ProspectiveProposal/{id}")]
        [HttpGet]
        public IHttpActionResult GetProspectiveProposalById(int id)
        {
            return Ok(ProposalRepo.GetProspectiveProposalById(id));
        }



        [Route("api/Proposal/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            return Ok(ProposalRepo.GetByID(id));
        }

        [Route("api/Proposal")]
        [HttpPost]
        public IHttpActionResult Post([FromBody]Proposal Proposal)
        {
            ProposalRepo.SaveOrUpdate(Proposal);
            return Ok(new { Status = "success", ID = Proposal.ID });
        }

        [Route("api/Proposal")]
        [HttpPut]
        public IHttpActionResult Put([FromBody]Proposal Proposal)
        {
            ProposalRepo.SaveOrUpdate(Proposal);
            return Ok(new { Status = "success" });
        }

        [Route("api/Proposal")]
        [HttpDelete]
        public void Delete(int id)
        {
            ProposalRepo.Remove(id);
        }


    }
}
