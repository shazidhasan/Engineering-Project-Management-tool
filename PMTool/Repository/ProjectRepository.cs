using System;
using System.Collections.Generic;
using ProducteevLikeSite.Models;
using System.Data.Common;
using Producteev.common;
using System.Data;
using ProducteevLikeSite.ViewModel;

namespace ProducteevLikeSite.Repository
{
    public class ProjectRepository : BaseRepository<Project>
    {
        protected ProjectViewModel Map(IDataReader reader)
        {
            var project = new ProjectViewModel()
            {
                ID = NullHandler.GetInt32(reader, "Id"),
                Title = NullHandler.GetString(reader, "Title"),
                ProjectNumber = NullHandler.GetString(reader, "ProjectNumber"),
                ProjectStatusID = (short)NullHandler.GetInt32(reader, "ProjectStatusID"),
                ProjectPriorityID = NullHandler.GetByte(reader, "ProjectPriorityID"),
                PlanName = NullHandler.GetString(reader, "PlanName"),
                PlanNumber = NullHandler.GetString(reader, "PlanNumber"),
                StartDate = NullHandler.GetDateTime(reader, "StartDate"),
                DueDate = NullHandler.GetDateTime(reader, "DueDate"),
                JobAddress = NullHandler.GetString(reader, "JobAddress"),
                JobCity = NullHandler.GetString(reader, "JobCity"),
                JobState = NullHandler.GetString(reader, "JobState"),
                JobZipAddress = NullHandler.GetString(reader, "JobZipAddress"),
                DWGFileLocation = NullHandler.GetString(reader, "DWGFIleLocation"),
                ProjectTypeNotes = NullHandler.GetString(reader, "ProjectTypeNotes"),
                CustomerID = NullHandler.GetInt32(reader, "CustomerID"),
                ReviewedByID = NullHandler.GetInt32(reader, "ReviewedByID"),
                ProjectTypeID = NullHandler.GetInt32(reader, "ProjectTypeID"),
                IsFoundation = NullHandler.GetBoolean(reader, "IsFoundation"),
                FoundationTypeID = NullHandler.GetInt32(reader, "FoundationTypeID"),
                CrawlSpaceJoist = NullHandler.GetString(reader, "CrawlSpaceJoist"),
                IsHaveSoilsReport = NullHandler.GetBoolean(reader, "IsHaveSoilsReport"),
                How_WhenSending = NullHandler.GetString(reader, "How_WhenSending"),
                IsFraming = NullHandler.GetBoolean(reader, "IsFraming"),
                TypeOfFloorJoist = NullHandler.GetString(reader, "TypeOfFloorJoist"),
                MaxFloorJoistSpacing = NullHandler.GetString(reader, "MaxFloorJoistSpacing"),
                TypeOfCeilingJoist = NullHandler.GetString(reader, "TypeOfCeilingJoist"),
                RoofingMaterials = NullHandler.GetString(reader, "RoofingMaterials"),
                WeightOfRoofingMaterials = NullHandler.GetString(reader, "WeightOfRoofingMaterials"),
                ProjectMaterialNotes = NullHandler.GetString(reader, "ProjectMaterialNotes"),
                CouriertoWhom = NullHandler.GetString(reader, "CouriertoWhom"),
                CouriertoAddress = NullHandler.GetString(reader, "CouriertoAddress"),
                IsHaveCourierPlans = NullHandler.GetBoolean(reader, "IsHaveCourierPlans"),
                IsHaveEmail = NullHandler.GetBoolean(reader, "IsHaveEmail"),
                EmailAddress = NullHandler.GetString(reader, "EmailAddress"),
                IsCustomerWillPickup = NullHandler.GetBoolean(reader, "IsCustomerWillPickup"),
                PickupByPersonName = NullHandler.GetString(reader, "PickupByPersonName"),
                PickupByPersonPhoneNumber = NullHandler.GetString(reader, "PickupByPersonPhoneNumber"),
                NumberOfCopies = NullHandler.GetInt32(reader, "NumberOfCopies"),
                ProjectHoldNotes = NullHandler.GetString(reader, "ProjectHoldNotes"),
                CustomerData = NullHandler.GetString(reader, "CustomerData"),
                Invoice = NullHandler.GetString(reader, "Invoice"),
                ProjectStatusName = NullHandler.GetString(reader, "ProjectStatusName"),
                ProjectPriorityTitle = NullHandler.GetString(reader, "ProjectPriorityTitle"),
                CustomerName = NullHandler.GetString(reader, "CustomerName"),
                ReviewedByName = NullHandler.GetString(reader, "ReviewedByName"),
                ProjectTypeName = NullHandler.GetString(reader, "ProjectTypeName"),
                FoundationTypeName = NullHandler.GetString(reader, "FoundationTypeName"),
            };
            return project;
        }

        public void SaveOrUpdate(Project p)
        {
            List<Project> projects = new List<Project>();
            string SP = ProducteevConstant.StoredProcedures.Project.SAVE_UPDATE_PROJECT;
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    Database.AddInParameter(dbCommand, "@Id", DbType.Int32, p.ID);
                    Database.AddInParameter(dbCommand, "@Title", DbType.String, p.Title);
                    Database.AddInParameter(dbCommand, "@ProjectNumber", DbType.String, p.ProjectNumber);
                    Database.AddInParameter(dbCommand, "@ProjectStatusID", DbType.Int16, p.ProjectStatusID);
                    Database.AddInParameter(dbCommand, "@ProjectPriorityID", DbType.Byte, p.ProjectPriorityID);
                    Database.AddInParameter(dbCommand, "@PlanName", DbType.String, p.PlanName);
                    Database.AddInParameter(dbCommand, "@PlanNumber", DbType.String, p.PlanNumber);
                    Database.AddInParameter(dbCommand, "@StartDate", DbType.DateTime, p.StartDate);
                    Database.AddInParameter(dbCommand, "@DueDate", DbType.DateTime, p.DueDate);
                    Database.AddInParameter(dbCommand, "@JobAddress", DbType.String, p.JobAddress);
                    Database.AddInParameter(dbCommand, "@JobCity", DbType.String, p.JobCity);
                    Database.AddInParameter(dbCommand, "@JobState", DbType.String, p.JobState);
                    Database.AddInParameter(dbCommand, "@JobZipAddress", DbType.String, p.JobZipAddress);
                    Database.AddInParameter(dbCommand, "@DWGFIleLocation", DbType.String, p.DWGFileLocation);
                    Database.AddInParameter(dbCommand, "@ProjectTypeNotes", DbType.String, p.ProjectTypeNotes);
                    Database.AddInParameter(dbCommand, "@CustomerID", DbType.Int32, p.CustomerID);
                    Database.AddInParameter(dbCommand, "@ReviewedByID", DbType.Int32, p.ReviewedByID);
                    Database.AddInParameter(dbCommand, "@ProjectTypeID", DbType.Int32, p.ProjectTypeID);
                    Database.AddInParameter(dbCommand, "@IsFoundation", DbType.Boolean, p.IsFoundation);
                    Database.AddInParameter(dbCommand, "@FoundationTypeID", DbType.Int32, p.FoundationTypeID);
                    Database.AddInParameter(dbCommand, "@CrawlSpaceJoist", DbType.String, p.CrawlSpaceJoist);
                    Database.AddInParameter(dbCommand, "@IsHaveSoilsReport", DbType.Boolean, p.IsHaveSoilsReport);
                    Database.AddInParameter(dbCommand, "@How_WhenSending", DbType.String, p.How_WhenSending);
                    Database.AddInParameter(dbCommand, "@IsFraming", DbType.Boolean, p.IsFraming);
                    Database.AddInParameter(dbCommand, "@TypeOfFloorJoist", DbType.String, p.TypeOfFloorJoist);
                    Database.AddInParameter(dbCommand, "@MaxFloorJoistSpacing", DbType.String, p.MaxFloorJoistSpacing);
                    Database.AddInParameter(dbCommand, "@TypeOfCeilingJoist", DbType.String, p.TypeOfCeilingJoist);
                    Database.AddInParameter(dbCommand, "@RoofingMaterials", DbType.String, p.RoofingMaterials);
                    Database.AddInParameter(dbCommand, "@WeightOfRoofingMaterials", DbType.String, p.WeightOfRoofingMaterials);
                    Database.AddInParameter(dbCommand, "@ProjectMaterialNotes", DbType.String, p.ProjectMaterialNotes);
                    Database.AddInParameter(dbCommand, "@CouriertoWhom", DbType.String, p.CouriertoWhom);
                    Database.AddInParameter(dbCommand, "@CouriertoAddress", DbType.String, p.CouriertoAddress);
                    Database.AddInParameter(dbCommand, "@IsHaveCourierPlans", DbType.Boolean, p.IsHaveCourierPlans);
                    Database.AddInParameter(dbCommand, "@IsHaveEmail", DbType.Boolean, p.IsHaveEmail);
                    Database.AddInParameter(dbCommand, "@EmailAddress", DbType.String, p.EmailAddress);
                    Database.AddInParameter(dbCommand, "@IsCustomerWillPickup", DbType.Boolean, p.IsCustomerWillPickup);
                    Database.AddInParameter(dbCommand, "@PickupByPersonName", DbType.String, p.PickupByPersonName);
                    Database.AddInParameter(dbCommand, "@PickupByPersonPhoneNumber", DbType.String, p.PickupByPersonPhoneNumber);
                    Database.AddInParameter(dbCommand, "@NumberOfCopies", DbType.Int32, p.NumberOfCopies);
                    Database.AddInParameter(dbCommand, "@ProjectHoldNotes", DbType.String, p.ProjectHoldNotes);
                    Database.AddInParameter(dbCommand, "@CustomerData", DbType.String, p.CustomerData);
                    Database.AddInParameter(dbCommand, "@Invoice", DbType.String, p.Invoice);
                    Database.AddOutParameter(dbCommand, "@GeneratedID", DbType.Int32,32);
                    Database.ExecuteNonQuery(dbCommand);

                    int projectId = (int)dbCommand.Parameters["@GeneratedID"].Value;

                    p.ID = projectId;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("ProjectRepository.Add(Project p) falied", ex);
            }
         }
        
        public void Remove(int Id)
        {
            List<Project> projects = new List<Project>();
            string SP = ProducteevConstant.StoredProcedures.Project.DELETE_PROJECT;
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {

                    Database.AddInParameter(dbCommand, "@ID", DbType.String, Id);                    
                    int returnValue = Database.ExecuteNonQuery(dbCommand);

                    if (returnValue > 0)
                    {
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("ProjectRepository.Remove(int id) falied", ex);
            }
        }

        

       public IEnumerable<Project> GetProposals()
        {
            List<Project> projects = new List<Project>();
            string SP = ProducteevConstant.StoredProcedures.Project.GET_ALL_PROPOSALS;
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    using (IDataReader reader = Database.ExecuteReader(dbCommand))
                    {
                        if (reader != null && !reader.IsClosed)
                        {
                            while (reader.Read())
                            {
                                var project = Map(reader);
                                projects.Add(project);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAll() project", ex);
            }
            return (IEnumerable<Project>)projects;
        }
        public IEnumerable<ProjectViewModel> GetAll()
        {
            List<ProjectViewModel> projects = new List<ProjectViewModel>();
            string SP = ProducteevConstant.StoredProcedures.Project.GET_ALL_PROJECTS;
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    using (IDataReader reader = Database.ExecuteReader(dbCommand))
                    {
                        if (reader != null && !reader.IsClosed)
                        {
                            while (reader.Read())
                            {
                                var project = Map(reader);
                                projects.Add(project);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAll() project", ex);
            }
            return (IEnumerable<ProjectViewModel>)projects;
        }


        public ProjectViewModel GetByID(int Id)
        {
            ProjectViewModel project = null;
            string SP = ProducteevConstant.StoredProcedures.Project.GET_PROJECT_BY_ID;
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    Database.AddInParameter(dbCommand, "@ID", DbType.String, Id);
                    using (IDataReader reader = Database.ExecuteReader(dbCommand))
                    {
                        if (reader != null && !reader.IsClosed)
                        {
                            while (reader.Read())
                            {
                                project = Map(reader);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetByID(int Id) project", ex);
            }

            return project;
        }
    }
}