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
    public class TaskRepository : BaseRepository<Task>
    {
        protected TaskVM Map(IDataReader reader)
        {
            var TaskVM = new TaskVM()
            {
                ID = NullHandler.GetInt32(reader, "ID"),
                TaskName = NullHandler.GetString(reader, "TaskName"),
                ProjectID = NullHandler.GetInt32(reader, "ProjectID"),
                ProjectName = NullHandler.GetString(reader, "ProjectName"),                
                TaskStatusID = NullHandler.GetInt32(reader, "TaskStatusID"),
                TaskStatus = NullHandler.GetString(reader, "TaskStatus"),
                DesignByEmployeeID = NullHandler.GetInt32(reader, "DesignByEmployeeID"),
                DesignByEmployee = NullHandler.GetString(reader, "DesignByEmployee"),
                Deadline = NullHandler.GetDateTime(reader, "Deadline"),
                ShortDescription = NullHandler.GetString(reader, "ShortDescription"),
                FullDescription = NullHandler.GetString(reader, "FullDescription"),
                NewReviewNotes = NullHandler.GetString(reader, "NewReviewNotes"),
                ReviewNotes = NullHandler.GetString(reader, "ReviewNotes"),
                TaskForProject = NullHandler.GetBoolean(reader, "TaskForProject")
                
            };
            return TaskVM;
        }

        public void SaveOrUpdate(Task p)
        {            
            string SP = ProducteevConstant.StoredProcedures.Task.SAVE_UPDATE_TASK;
            if (p.Deadline == DateTime.MinValue)
            {
                p.Deadline = DateTime.Now;
            }

            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    Database.AddInParameter(dbCommand, "@ID", DbType.Int32, p.ID);
                    Database.AddInParameter(dbCommand, "@ProjectID", DbType.Int32, p.ProjectID);
                    Database.AddInParameter(dbCommand, "@TaskStatusID", DbType.Int32, p.TaskStatusID);
                    Database.AddInParameter(dbCommand, "@TaskName", DbType.String, p.TaskName);
                    Database.AddInParameter(dbCommand, "@DesignByEmployeeID", DbType.Int32, p.DesignByEmployeeID);
                    Database.AddInParameter(dbCommand, "@Deadline", DbType.DateTime, p.Deadline);
                    Database.AddInParameter(dbCommand, "@ShortDescription", DbType.String, p.ShortDescription);
                    Database.AddInParameter(dbCommand, "@FullDescription", DbType.String, p.FullDescription);
                    Database.AddInParameter(dbCommand, "@NewReviewNotes", DbType.String, p.NewReviewNotes);
                    Database.AddInParameter(dbCommand, "@ReviewNotes", DbType.String, p.ReviewNotes);
                    Database.AddInParameter(dbCommand, "@TaskForProject", DbType.Boolean, p.TaskForProject);
                    Database.AddInParameter(dbCommand, "@CreatedDate", DbType.DateTime, p.CreatedDate);
                    Database.AddInParameter(dbCommand, "@CreatedBy", DbType.Int32, p.CreatedBy);
                    
                    Database.AddOutParameter(dbCommand, "@GeneratedID", DbType.Int32, 32);
                    Database.ExecuteNonQuery(dbCommand);

                    int TASKId = (int)dbCommand.Parameters["@GeneratedID"].Value;

                    p.ID = TASKId;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("TASKRepository.Add(TASK p) falied", ex);
            }
        }

        //public void Remove(int Id)
        //{
        //    List<TASK> TASKs = new List<TASK>();
        //    string SP = ProducteevConstant.StoredProcedures.DELETE_TASK;
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
        //        throw new Exception("TASKRepository.Remove(int id) falied", ex);
        //    }
        //}

        public IEnumerable<TaskVM> GetAll()
        {
            List<TaskVM> Taskes = new List<TaskVM>();
            string SP = ProducteevConstant.StoredProcedures.Task.GET_ALL_TASK;
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
                                var Task = Map(reader);
                                Taskes.Add(Task);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAll() TASK", ex);
            }
            return (IEnumerable<TaskVM>)Taskes;
        }

        

        public IEnumerable<TaskVM> GetAllTaskByProposalID(int proposalId)
        {
            List<TaskVM> Tasks = new List<TaskVM>();
            string SP = ProducteevConstant.StoredProcedures.Task.GET_ALL_TASK_BY_PROPOSAL_ID;
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    Database.AddInParameter(dbCommand, "@proposalId", DbType.Int32, proposalId);
                    using (IDataReader reader = Database.ExecuteReader(dbCommand))
                    {
                        if (reader != null && !reader.IsClosed)
                        {
                            while (reader.Read())
                            {
                                var Task = Map(reader);
                                Tasks.Add(Task);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAll() TASK", ex);
            }
            return (IEnumerable<TaskVM>)Tasks;
        }

        public IEnumerable<TaskVM> GetAllTaskByProjectID(int projectID)
        {
            List<TaskVM> Tasks = new List<TaskVM>();
            string SP = ProducteevConstant.StoredProcedures.Task.GET_ALL_TASK_BY_PROJECT_ID;
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    Database.AddInParameter(dbCommand, "@projectId", DbType.Int32, projectID);
                    using (IDataReader reader = Database.ExecuteReader(dbCommand))
                    {                        
                        if (reader != null && !reader.IsClosed)
                        {
                            while (reader.Read())
                            {
                                var Task = Map(reader);
                                Tasks.Add(Task);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAll() TASK", ex);
            }
            return (IEnumerable<TaskVM>)Tasks;
        }


        

        public IEnumerable<TaskVM> GetAllTaskByClientID(int clientId)
        {
            List<TaskVM> Tasks = new List<TaskVM>();
            string SP = ProducteevConstant.StoredProcedures.Task.GET_ALL_TASK_BY_CLIENT_ID;
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    Database.AddInParameter(dbCommand, "@clientId", DbType.Int32, clientId);
                    using (IDataReader reader = Database.ExecuteReader(dbCommand))
                    {
                        if (reader != null && !reader.IsClosed)
                        {
                            while (reader.Read())
                            {
                                var Task = Map(reader);
                                Tasks.Add(Task);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetTaskByClientId() TASK", ex);
            }
            return (IEnumerable<TaskVM>)Tasks;
        }


        public IEnumerable<TaskVM> GetAllTaskByEmployeeID(int empID)
        {
            List<TaskVM> Tasks = new List<TaskVM>();
            string SP = ProducteevConstant.StoredProcedures.Task.GET_ALL_TASK_BY_EMPLOYEE_ID;
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    Database.AddInParameter(dbCommand, "@empId", DbType.Int32, empID);
                    using (IDataReader reader = Database.ExecuteReader(dbCommand))
                    {
                        if (reader != null && !reader.IsClosed)
                        {
                            while (reader.Read())
                            {
                                var Task = Map(reader);
                                Tasks.Add(Task);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAll() TASK", ex);
            }
            return (IEnumerable<TaskVM>)Tasks;
        }


        //public TASK GetByID(int Id)
        //{
        //    TASK TASK = null;
        //    string SP = ProducteevConstant.StoredProcedures.GET_TASK_BY_ID;
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
        //                        TASK = Map(reader);
        //                    }
        //                    reader.Close();
        //                }
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception("Failed in GetByID(int Id) TASK", ex);
        //    }

        //    return TASK;
        //}
    }
}