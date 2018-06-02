using ProducteevLikeSite.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProducteevLikeSite.Models
{
    public class Proposal : BaseEntity
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string Details { get; set; }
        public DateTime InitialContractDate { get; set; }
        public DateTime SubmittalDate { get; set; }
        public DateTime RevisionDate { get; set; }
        public string ProposalType { get; set; }
        public string DailyType { get; set; }
        public string ProjectType { get; set; }
        public string ProjectOtherTypeValue { get; set; }
        public string FoundationTypeValue { get; set; }
        public string FoundationSlabTypeValue { get; set; }
        public string FoundationPierTypeValue { get; set; }
        public string FoundationPierRemiedialTypeValue { get; set; }
        public string FoundationPierRemiedialOtherTypeValue { get; set; }
        public string FoundationOtherTypeValue { get; set; }
        public string FrameTypeValue { get; set; }
        public string FrameResidentialValue { get; set; }
        public string FrameResidentialOtherValue { get; set; }
        public string FrameExteriorValue { get; set; }
        public string FrameExteriorOtherValue { get; set; }
        public string FrameRoofTypeValue { get; set; }
        public string FrameRoofTypeOtherValue { get; set; }
        public string RetainingWallValue { get; set; }
        public string RetainingWallTypeValue { get; set; }
        public string RetainingWallTypeWallValue { get; set; }
        public string RetainingWallTypeWallOtherValue { get; set; }
        public string PoolValue { get; set; }
        public string PoolCompnayDesignValue { get; set; }
        public int ClientID { get; set; }
    }
}