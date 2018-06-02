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
    public class NoteRepository : BaseRepository<Note>
    {
        protected Note Map(IDataReader reader)
        {
            var Note = new Note()
            {
                ID = NullHandler.GetInt32(reader, "ID"),
                Comment = NullHandler.GetString(reader, "Comment"),
                TaskId = NullHandler.GetInt32(reader, "TaskId"),
                CreatedDate = NullHandler.GetDateTime(reader, "CreatedDate"),
                CreatedByEmployeeId = NullHandler.GetInt32(reader, "CreatedByEmployeeId"),
            };
            return Note;
        }

        public void SaveOrUpdate(Note p)
        {            
            string SP = ProducteevConstant.StoredProcedures.Note.SAVE_UPDATE_NOTE;
          
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    Database.AddInParameter(dbCommand, "@ID", DbType.Int32, p.ID);
                    Database.AddInParameter(dbCommand, "@taskId", DbType.Int32, p.TaskId);
                    Database.AddInParameter(dbCommand, "@Comment", DbType.String, p.Comment);
                    Database.AddInParameter(dbCommand, "@CreatedDate", DbType.DateTime, p.CreatedDate);
                    Database.AddInParameter(dbCommand, "@CreatedByEmployeeId", DbType.Int32, p.CreatedByEmployeeId);
                    
                    Database.AddOutParameter(dbCommand, "@GeneratedID", DbType.Int32, 32);
                    Database.ExecuteNonQuery(dbCommand);

                    int NoteId = (int)dbCommand.Parameters["@GeneratedID"].Value;

                    p.ID = NoteId;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("NoteRepository.Add(Note p) falied", ex);
            }
        }
            

        public IEnumerable<Note> GetAll()
        {
            List<Note> Notees = new List<Note>();
            string SP = ProducteevConstant.StoredProcedures.Note.GET_ALL_NOTE;
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
                                var Note = Map(reader);
                                Notees.Add(Note);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAll() Note", ex);
            }
            return (IEnumerable<Note>)Notees;
        }

        

        public IEnumerable<Note> GetAllNoteByTaskID(int taskId)
        {
            List<Note> Notes = new List<Note>();
            string SP = ProducteevConstant.StoredProcedures.Note.GET_ALL_NOTE_BY_TASK_ID;
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    Database.AddInParameter(dbCommand, "@taskId", DbType.Int32, taskId);
                    using (IDataReader reader = Database.ExecuteReader(dbCommand))
                    {
                        if (reader != null && !reader.IsClosed)
                        {
                            while (reader.Read())
                            {
                                var Note = Map(reader);
                                Notes.Add(Note);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAllNoteByTaskID() Note", ex);
            }
            return (IEnumerable<Note>)Notes;
        }
    }
}