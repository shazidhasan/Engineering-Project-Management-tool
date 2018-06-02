using Microsoft.Practices.EnterpriseLibrary.Data;
using Producteev.common;
using ProducteevLikeSite.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Web;

namespace ProducteevLikeSite.Repository
{
    public class ProjectTypeRepository : BaseRepository<ProjectStatus>
    {
        protected ProjectType Map(IDataReader reader)
        {
            var ProjectType = new ProjectType()
            {
                ID = NullHandler.GetInt32(reader, "ID"),
                ProjectTypeTitle = NullHandler.GetString(reader, "ProjectTypeTitle"),
            };
            return ProjectType;
        }

        //public void SaveOrUpdate(Project p)
        //{
        //    List<Project> projects = new List<Project>();
        //    string SP = ProducteevConstant.StoredProcedures.SAVE_UPDATE_PROJECT;
        //    try
        //    {
        //        using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
        //        {
        //            Database.AddInParameter(dbCommand, "@Id", DbType.Int32, p.ID);
        //            Database.AddInParameter(dbCommand, "@Title", DbType.String, p.Title);
        //            Database.AddInParameter(dbCommand, "@ProjectNumber", DbType.String, p.ProjectNumber);
        //            Database.AddInParameter(dbCommand, "@ProjectTypeID", DbType.Int16, p.ProjectTypeID);
        //            Database.AddInParameter(dbCommand, "@ProjectPriorityID", DbType.Byte, p.ProjectPriorityID);
        //            Database.AddInParameter(dbCommand, "@PlanName", DbType.String, p.PlanName);
        //            Database.AddInParameter(dbCommand, "@PlanNumber", DbType.String, p.PlanNumber);
        //            Database.AddInParameter(dbCommand, "@StartDate", DbType.DateTime, p.StartDate);
        //            Database.AddInParameter(dbCommand, "@DueDate", DbType.DateTime, p.DueDate);
        //            Database.AddInParameter(dbCommand, "@JobAddress", DbType.String, p.JobAddress);
        //            Database.AddInParameter(dbCommand, "@JobCity", DbType.String, p.JobCity);
        //            Database.AddInParameter(dbCommand, "@JobState", DbType.String, p.JobState);
        //            Database.AddInParameter(dbCommand, "@JobZipAddress", DbType.String, p.JobZipAddress);
        //            Database.AddInParameter(dbCommand, "@DWGFIleLocation", DbType.String, p.DWGFIleLocation);
        //            Database.AddInParameter(dbCommand, "@ProjectTypeNotes", DbType.String, p.ProjectTypeNotes);
        //            Database.AddInParameter(dbCommand, "@CustomerID", DbType.Int32, p.CustomerID);
        //            Database.AddInParameter(dbCommand, "@ReviewedByID", DbType.Int32, p.ReviewedByID);
        //            Database.AddInParameter(dbCommand, "@ProjectTypeID", DbType.Int32, p.ProjectTypeID);
        //            Database.AddInParameter(dbCommand, "@IsFoundation", DbType.Boolean, p.IsFoundation);
        //            Database.AddInParameter(dbCommand, "@FoundationTypeID", DbType.Int32, p.FoundationTypeID);
        //            Database.AddInParameter(dbCommand, "@CrawlSpaceJoist", DbType.String, p.CrawlSpaceJoist);
        //            Database.AddInParameter(dbCommand, "@IsHaveSoilsReport", DbType.Boolean, p.IsHaveSoilsReport);
        //            Database.AddInParameter(dbCommand, "@How_WhenSending", DbType.String, p.How_WhenSending);
        //            Database.AddInParameter(dbCommand, "@IsFraming", DbType.Boolean, p.IsFraming);
        //            Database.AddInParameter(dbCommand, "@TypeOfFloorJoist", DbType.String, p.TypeOfFloorJoist);
        //            Database.AddInParameter(dbCommand, "@MaxFloorJoistSpacing", DbType.String, p.MaxFloorJoistSpacing);
        //            Database.AddInParameter(dbCommand, "@TypeOfCeilingJoist", DbType.String, p.TypeOfCeilingJoist);
        //            Database.AddInParameter(dbCommand, "@RoofingMaterials", DbType.String, p.RoofingMaterials);
        //            Database.AddInParameter(dbCommand, "@WeightOfRoofingMaterials", DbType.String, p.WeightOfRoofingMaterials);
        //            Database.AddInParameter(dbCommand, "@ProjectMaterialNotes", DbType.String, p.ProjectMaterialNotes);
        //            Database.AddInParameter(dbCommand, "@CouriertoWhom", DbType.String, p.CouriertoWhom);
        //            Database.AddInParameter(dbCommand, "@CouriertoAddress", DbType.String, p.CouriertoAddress);
        //            Database.AddInParameter(dbCommand, "@IsHaveCourierPlans", DbType.Boolean, p.IsHaveCourierPlans);
        //            Database.AddInParameter(dbCommand, "@IsHaveEmail", DbType.Boolean, p.IsHaveEmail);
        //            Database.AddInParameter(dbCommand, "@EmailAddress", DbType.String, p.EmailAddress);
        //            Database.AddInParameter(dbCommand, "@IsCustomerWillPickup", DbType.Boolean, p.IsCustomerWillPickup);
        //            Database.AddInParameter(dbCommand, "@PickupByPersonName", DbType.String, p.PickupByPersonName);
        //            Database.AddInParameter(dbCommand, "@PickupByPersonPhoneNumber", DbType.String, p.PickupByPersonPhoneNumber);
        //            Database.AddInParameter(dbCommand, "@NumberOfCopies", DbType.Int32, p.NumberOfCopies);
        //            Database.AddInParameter(dbCommand, "@ProjectHoldNotes", DbType.String, p.ProjectHoldNotes);
        //            Database.AddInParameter(dbCommand, "@CustomerData", DbType.String, p.CustomerData);
        //            Database.AddInParameter(dbCommand, "@Invoice", DbType.String, p.Invoice);
        //            Database.AddOutParameter(dbCommand, "@GeneratedID", DbType.Int32, 32);
        //            Database.ExecuteNonQuery(dbCommand);

        //            int projectId = (int)dbCommand.Parameters["@GeneratedID"].Value;

        //            p.ID = projectId;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception("ProjectRepository.Add(Project p) falied", ex);
        //    }
        //}

        //public void Remove(int Id)
        //{
        //    List<Project> projects = new List<Project>();
        //    string SP = ProducteevConstant.StoredProcedures.DELETE_PROJECT;
        //    try
        //    {
        //        using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
        //        {

        //            Database.AddInParameter(dbCommand, "@ID", DbType.String, Id);
        //            int returnValue = Database.ExecuteNonQuery(dbCommand);

        //            if (returnValue > 0)
        //            {
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception("ProjectRepository.Remove(int id) falied", ex);
        //    }
        //}

        public IEnumerable<ProjectType> GetAll()
        {
            List<ProjectType> ProjectTypees = new List<ProjectType>();
            string SP = ProducteevConstant.StoredProcedures.ProjectType.GET_ALL_PROJECT_TYPE;
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
                                var ProjectType = Map(reader);
                                ProjectTypees.Add(ProjectType);
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
            return (IEnumerable<ProjectType>)ProjectTypees;
        }


        //public Project GetByID(int Id)
        //{
        //    Project project = null;
        //    string SP = ProducteevConstant.StoredProcedures.GET_PROJECT_BY_ID;
        //    try
        //    {
        //        using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
        //        {
        //            Database.AddInParameter(dbCommand, "@ID", DbType.String, Id);
        //            using (IDataReader reader = Database.ExecuteReader(dbCommand))
        //            {
        //                if (reader != null && !reader.IsClosed)
        //                {
        //                    while (reader.Read())
        //                    {
        //                        project = Map(reader);
        //                    }
        //                    reader.Close();
        //                }
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception("Failed in GetByID(int Id) project", ex);
        //    }

        //    return project;
        //}
    }
}