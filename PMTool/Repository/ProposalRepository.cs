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
    public class ProposalRepository : BaseRepository<Proposal>
    {
        protected Proposal Map(IDataReader reader)
        {
            var Proposal = new Proposal()
            {
                ID = NullHandler.GetInt32(reader, "ID"),
                Name = NullHandler.GetString(reader, "Name"),
                Address = NullHandler.GetString(reader, "Address"),                
                City = NullHandler.GetString(reader, "City"),
                State = NullHandler.GetString(reader, "State"),
                Zip = NullHandler.GetString(reader, "zip"),
                Details = NullHandler.GetString(reader, "Details"),
                InitialContractDate = NullHandler.GetDateTime(reader, "InitialContractDate"),
                SubmittalDate = NullHandler.GetDateTime(reader, "SubmittalDate"),
                RevisionDate = NullHandler.GetDateTime(reader, "RevisionDate"),
                ProposalType = NullHandler.GetString(reader, "ProposalType"),
                DailyType = NullHandler.GetString(reader, "DailyType"),
                ProjectType = NullHandler.GetString(reader, "ProjectType"),
                ProjectOtherTypeValue = NullHandler.GetString(reader, "ProjectOtherTypeValue"),
                FoundationTypeValue = NullHandler.GetString(reader, "FoundationTypeValue"),
                FoundationSlabTypeValue = NullHandler.GetString(reader, "FoundationSlabTypeValue"),
                FoundationPierTypeValue = NullHandler.GetString(reader, "FoundationPierTypeValue"),
                FoundationPierRemiedialTypeValue = NullHandler.GetString(reader, "FoundationPierRemiedialTypeValue"),
                FoundationPierRemiedialOtherTypeValue = NullHandler.GetString(reader, "FoundationPierRemiedialOtherTypeValue"),
                FoundationOtherTypeValue = NullHandler.GetString(reader, "FoundationOtherTypeValue"),
                FrameTypeValue = NullHandler.GetString(reader, "FrameTypeValue"),
                FrameResidentialValue = NullHandler.GetString(reader, "FrameResidentialValue"),
                FrameResidentialOtherValue = NullHandler.GetString(reader, "FrameResidentialOtherValue"),
                FrameExteriorValue = NullHandler.GetString(reader, "FrameExteriorValue"),
                FrameExteriorOtherValue = NullHandler.GetString(reader, "FrameExteriorOtherValue"),
                FrameRoofTypeValue = NullHandler.GetString(reader, "FrameRoofTypeValue"),
                FrameRoofTypeOtherValue = NullHandler.GetString(reader, "FrameRoofTypeOtherValue"),
                RetainingWallValue = NullHandler.GetString(reader, "RetainingWallValue"),
                RetainingWallTypeValue = NullHandler.GetString(reader, "RetainingWallTypeValue"),
                RetainingWallTypeWallValue = NullHandler.GetString(reader, "RetainingWallTypeWallValue"),
                RetainingWallTypeWallOtherValue = NullHandler.GetString(reader, "RetainingWallTypeWallOtherValue"),
                PoolValue = NullHandler.GetString(reader, "PoolValue"),
                PoolCompnayDesignValue = NullHandler.GetString(reader, "PoolCompnayDesignValue"),
                ClientID = NullHandler.GetInt32(reader, "ClientID"),
                
            };
            return Proposal;
        }

        public void SaveOrUpdate(Proposal p)
        {            
            string SP = ProducteevConstant.StoredProcedures.Proposal.SAVE_UPDATE_PROPOSAL;
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    Database.AddInParameter(dbCommand, "@Id", DbType.Int32, p.ID);
                    Database.AddInParameter(dbCommand, "@Name", DbType.String, p.Name);
                    Database.AddInParameter(dbCommand, "@Address", DbType.String, p.Address);
                    Database.AddInParameter(dbCommand, "@City", DbType.String, p.City);
                    Database.AddInParameter(dbCommand, "@State", DbType.String, p.State);
                    Database.AddInParameter(dbCommand, "@Zip", DbType.String, p.Zip);
                    Database.AddInParameter(dbCommand, "@Details", DbType.String, p.Details);
                    Database.AddInParameter(dbCommand, "@InitialContractDate", DbType.DateTime, p.InitialContractDate);
                    Database.AddInParameter(dbCommand, "@SubmittalDate", DbType.DateTime, p.SubmittalDate);
                    Database.AddInParameter(dbCommand, "@RevisionDate", DbType.DateTime, p.RevisionDate);
                    Database.AddInParameter(dbCommand, "@ProposalType", DbType.String, p.ProposalType);
                    Database.AddInParameter(dbCommand, "@DailyType", DbType.String, p.DailyType);
                    Database.AddInParameter(dbCommand, "@ProjectType", DbType.String, p.ProjectType);
                    Database.AddInParameter(dbCommand, "@ProjectOtherTypeValue", DbType.String, p.ProjectOtherTypeValue);
                    Database.AddInParameter(dbCommand, "@FoundationTypeValue", DbType.String, p.FoundationTypeValue);
                    Database.AddInParameter(dbCommand, "@FoundationSlabTypeValue", DbType.String, p.FoundationSlabTypeValue);
                    Database.AddInParameter(dbCommand, "@FoundationPierTypeValue", DbType.String, p.FoundationPierTypeValue);
                    Database.AddInParameter(dbCommand, "@FoundationPierRemiedialTypeValue", DbType.String, p.FoundationPierRemiedialTypeValue);
                    Database.AddInParameter(dbCommand, "@FoundationPierRemiedialOtherTypeValue", DbType.String, p.FoundationPierRemiedialOtherTypeValue);
                    Database.AddInParameter(dbCommand, "@FoundationOtherTypeValue", DbType.String, p.FoundationOtherTypeValue);
                    Database.AddInParameter(dbCommand, "@FrameTypeValue", DbType.String, p.FrameTypeValue);
                    Database.AddInParameter(dbCommand, "@FrameResidentialValue", DbType.String, p.FrameResidentialValue);
                    Database.AddInParameter(dbCommand, "@FrameResidentialOtherValue", DbType.String, p.FrameResidentialOtherValue);
                    Database.AddInParameter(dbCommand, "@FrameExteriorValue", DbType.String, p.FrameExteriorValue);
                    Database.AddInParameter(dbCommand, "@FrameExteriorOtherValue", DbType.String, p.FrameExteriorOtherValue);
                    Database.AddInParameter(dbCommand, "@FrameRoofTypeValue", DbType.String, p.FrameRoofTypeValue);
                    Database.AddInParameter(dbCommand, "@FrameRoofTypeOtherValue", DbType.String, p.FrameRoofTypeOtherValue);
                    Database.AddInParameter(dbCommand, "@RetainingWallValue", DbType.String, p.RetainingWallValue);
                    Database.AddInParameter(dbCommand, "@RetainingWallTypeValue", DbType.String, p.RetainingWallTypeValue);
                    Database.AddInParameter(dbCommand, "@RetainingWallTypeWallValue", DbType.String, p.RetainingWallTypeWallValue);
                    Database.AddInParameter(dbCommand, "@RetainingWallTypeWallOtherValue", DbType.String, p.RetainingWallTypeWallOtherValue);
                    Database.AddInParameter(dbCommand, "@PoolValue", DbType.String, p.PoolValue);
                    Database.AddInParameter(dbCommand, "@PoolCompnayDesignValue", DbType.String, p.PoolCompnayDesignValue);
                    Database.AddInParameter(dbCommand, "@ClientID", DbType.Int32, p.ClientID);
                    

                    Database.AddOutParameter(dbCommand, "@GeneratedID", DbType.Int32,32);
                    Database.ExecuteNonQuery(dbCommand);

                    int ProposalId = (int)dbCommand.Parameters["@GeneratedID"].Value;

                    p.ID = ProposalId;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("ProposalRepository.Add(Proposal p) falied", ex);
            }
        }

        public void Remove(int Id)
        {
            string SP = ProducteevConstant.StoredProcedures.Proposal.DELETE_PROPOSAL;
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
                throw new Exception("ProposalRepository.Remove(int id) falied", ex);
            }
        }


        public IEnumerable<Proposal> GetAllProspectiveProposal()
        {
            List<Proposal> Proposales = new List<Proposal>();
            string SP = ProducteevConstant.StoredProcedures.Proposal.GET_ALL_PROSPECTIVE_PROPOSAL;
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
                                var Proposal = Map(reader);
                                Proposales.Add(Proposal);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAll() Proposal", ex);
            }
            return (IEnumerable<Proposal>)Proposales;
        }

        public IEnumerable<Proposal> GetAll()
        {
            List<Proposal> Proposales = new List<Proposal>();
            string SP = ProducteevConstant.StoredProcedures.Proposal.GET_ALL_PROPOSAL;
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
                                var Proposal = Map(reader);
                                Proposales.Add(Proposal);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAll() Proposal", ex);
            }
            return (IEnumerable<Proposal>)Proposales;
        }

        public Proposal GetByID(int Id)
        {
            Proposal Proposal = null;
            string SP = ProducteevConstant.StoredProcedures.Proposal.GET_PROPOSAL_BY_ID;
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
                                Proposal = Map(reader);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetByID(int Id) Proposal", ex);
            }

            return Proposal;
        }


        public Proposal GetProspectiveProposalById(int Id)
        {
            Proposal Proposal = null;
            string SP = ProducteevConstant.StoredProcedures.Proposal.GET_PROSPECTIVE_PROPOSAL_BY_ID;
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
                                Proposal = Map(reader);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetProspectiveProposalById(int Id) Proposal", ex);
            }

            return Proposal;
        }
        
    }
}