using ProducteevLikeSite.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ProducteevLikeSite.Models
{
    public class Project : BaseEntity
    {
        [Required]
        public string Title { get; set; }        

        public string ProjectNumber { get; set; }

        public short ProjectStatusID { get; set; }

        public byte ProjectPriorityID { get; set; }

        public string PlanName { get; set; }

        public string PlanNumber { get; set; }

        
        public DateTime StartDate { get; set; }


        public DateTime DueDate { get; set; }

        public string JobAddress { get; set; }

        public string JobCity { get; set; }

        public string JobState { get; set; }

        public string JobZipAddress { get; set; }


        public string DWGFileLocation { get; set; }

        
        public int CustomerID { get; set; }

        public int ReviewedByID { get; set; }

        [Required]
        public int ProjectTypeID { get; set; }

        public string ProjectTypeNotes { get; set; }

        public bool IsFoundation { get; set; }

        public int FoundationTypeID { get; set; }

        public string CrawlSpaceJoist { get; set; }

        public bool IsHaveSoilsReport { get; set; }

        public string How_WhenSending { get; set; }

        public bool IsFraming { get; set; }

        public string TypeOfFloorJoist { get; set; }

        public string MaxFloorJoistSpacing { get; set; }

        public string TypeOfCeilingJoist { get; set; }

        public string RoofingMaterials { get; set; }

        public string WeightOfRoofingMaterials { get; set; }

        public string ProjectMaterialNotes { get; set; }

        public bool IsHaveCourierPlans { get; set; }

        public string CouriertoWhom { get; set; }

        public string CouriertoAddress { get; set; }

        public bool IsHaveEmail { get; set; }

        public string EmailAddress { get; set; }

        public bool IsCustomerWillPickup { get; set; }

        public string PickupByPersonName { get; set; }

        public string PickupByPersonPhoneNumber { get; set; }

        public int NumberOfCopies { get; set; }

        public string ProjectHoldNotes { get; set; }

        public string CustomerData { get; set; }

        public string Invoice { get; set; }













    }
}