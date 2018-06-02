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
    public class TaskStatusRepository : BaseRepository<Task>
    {
        protected TaskStatus Map(IDataReader reader)
        {
            var taskStatus = new TaskStatus()
            {
                ID = NullHandler.GetInt32(reader, "ID"),
                StatusTitle = NullHandler.GetString(reader, "StatusTitle"),                
            };
            return taskStatus;
        }

        //public void SaveOrUpdate(TaskStatus ts)
        //{
        //    List<Task> tasks = new List<Task>();
        //    string SP = ProducteevConstant.StoredProcedures.Task.SAVE_UPDATE_TASK;
        //    try
        //    {
        //        using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
        //        {
        //            Database.AddInParameter(dbCommand, "@ID", DbType.Int32, p.ID);
        //            Database.AddInParameter(dbCommand, "@ProjectID", DbType.Int32, p.ProjectID);
        //            Database.AddInParameter(dbCommand, "@TaskStatusID", DbType.Int32, p.TaskStatusID);
        //            Database.AddInParameter(dbCommand, "@TaskName", DbType.Int32, p.TaskName);
        //            Database.AddInParameter(dbCommand, "@DesignByEmployeeID", DbType.Int32, p.DesignByEmployeeID);
        //            Database.AddInParameter(dbCommand, "@Deadline", DbType.Int32, p.Deadline);
        //            Database.AddInParameter(dbCommand, "@ShortDescription", DbType.Int32, p.ShortDescription);
        //            Database.AddInParameter(dbCommand, "@FullDescription", DbType.Int32, p.FullDescription);
        //            Database.AddInParameter(dbCommand, "@NewReviewNotes", DbType.Int32, p.NewReviewNotes);
        //            Database.AddInParameter(dbCommand, "@ReviewNotes", DbType.Int32, p.ReviewNotes);
        //            Database.ExecuteNonQuery(dbCommand);

        //            int TASKId = (int)dbCommand.Parameters["@GeneratedID"].Value;

        //            p.ID = TASKId;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception("TaskStatusRepository.Add(TaskStatus p) falied", ex);
        //    }
        //}

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
        //        throw new Exception("TaskStatusRepository.Remove(int id) falied", ex);
        //    }
        //}

        public IEnumerable<TaskStatus> GetAll()
        {
            List<TaskStatus> taskStatuses = new List<TaskStatus>();
            string SP = ProducteevConstant.StoredProcedures.Task.GET_ALL_TASK_STATUS;
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
                                var taskStatus = Map(reader);
                                taskStatuses.Add(taskStatus);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAll() taskStatus", ex);
            }
            return (IEnumerable<TaskStatus>)taskStatuses;
        }


        //public IEnumerable<Task> GetAllTaskByProjectID(int projectID)
        //{
        //    List<Task> Taskes = new List<Task>();
        //    string SP = ProducteevConstant.StoredProcedures.Task.GET_ALL_TASK;
        //    try
        //    {
        //        using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
        //        {
        //            using (IDataReader reader = Database.ExecuteReader(dbCommand))
        //            {
        //                Database.AddInParameter(dbCommand, "@projectId", DbType.Int32, projectID);
        //                if (reader != null && !reader.IsClosed)
        //                {
        //                    while (reader.Read())
        //                    {
        //                        var TaskStatus = Map(reader);
        //                        Taskes.Add(Task);
        //                    }
        //                    reader.Close();
        //                }
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw new Exception("Failed in GetAll() TASK", ex);
        //    }
        //    return (IEnumerable<Task>)Taskes;
        //}


        //public TaskStatus GetByID(int Id)
        //{
        //    TaskStatus TaskStatus = null;
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
        //                        TaskStatus = Map(reader);
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