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
    public class CustomerRepository : BaseRepository<Customer>
    {
        protected Customer Map(IDataReader reader)
        {
            var Customer = new Customer()
            {
                ID = NullHandler.GetInt32(reader, "ID"),
                Title = NullHandler.GetString(reader, "Title"),
                KeyPerson = NullHandler.GetString(reader, "KeyPerson"),
                Address = NullHandler.GetString(reader, "Address"),
                City = NullHandler.GetString(reader, "City"),
                State = NullHandler.GetString(reader, "State"),
                Zip = NullHandler.GetString(reader, "Zip"),
                Phone = NullHandler.GetString(reader, "Phone"),
                Email = NullHandler.GetString(reader, "Email"),
            };
            return Customer;
        }

        public void SaveOrUpdate(Customer p)
        {            
            string SP = ProducteevConstant.StoredProcedures.Customer.SAVE_UPDATE_CUSTOMER;
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    Database.AddInParameter(dbCommand, "@Id",DbType.Int32, p.ID);
                    Database.AddInParameter(dbCommand, "@Title",DbType.String, p.Title);
                    Database.AddInParameter(dbCommand, "@KeyPerson",DbType.String, p.KeyPerson);
                    Database.AddInParameter(dbCommand, "@Address",DbType.String, p.Address);
                    Database.AddInParameter(dbCommand, "@City", DbType.String, p.City);
                    Database.AddInParameter(dbCommand, "@State", DbType.String, p.State);
                    Database.AddInParameter(dbCommand, "@Zip", DbType.String, p.Zip);
                    Database.AddInParameter(dbCommand, "@Phone",DbType.String, p.Phone);
                    Database.AddInParameter(dbCommand, "@AltPhone",DbType.String, p.AltPhone);
                    Database.AddInParameter(dbCommand, "@Email",DbType.String, p.Email);
                    Database.AddInParameter(dbCommand, "@Notes", DbType.String, p.Notes);                    

                    Database.AddOutParameter(dbCommand, "@GeneratedID", DbType.Int32,32);
                    Database.ExecuteNonQuery(dbCommand);

                    int customerId = (int)dbCommand.Parameters["@GeneratedID"].Value;

                    p.ID = customerId;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("CustomerRepository.Add(Customer p) falied", ex);
            }
        }

        public void Remove(int Id)
        {
            string SP = ProducteevConstant.StoredProcedures.Customer.DELETE_CUSTOMER;
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
                throw new Exception("CustomerRepository.Remove(int id) falied", ex);
            }
        }


        public IEnumerable<Customer> GetAllProspectiveCustomer()
        {
            List<Customer> Customeres = new List<Customer>();
            string SP = ProducteevConstant.StoredProcedures.Customer.GET_ALL_PROSPECTIVE_CUSTOMER;
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
                                var Customer = Map(reader);
                                Customeres.Add(Customer);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAll() Customer", ex);
            }
            return (IEnumerable<Customer>)Customeres;
        }

        public IEnumerable<Customer> GetAll()
        {
            List<Customer> Customeres = new List<Customer>();
            string SP = ProducteevConstant.StoredProcedures.Customer.GET_ALL_CUSTOMER;
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
                                var Customer = Map(reader);
                                Customeres.Add(Customer);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAll() Customer", ex);
            }
            return (IEnumerable<Customer>)Customeres;
        }

        public Customer GetByID(int Id)
        {
            Customer customer = null;
            string SP = ProducteevConstant.StoredProcedures.Customer.GET_CUSTOMER_BY_ID;
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
                                customer = Map(reader);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetByID(int Id) customer", ex);
            }

            return customer;
        }


        public Customer GetProspectiveCustomerById(int Id)
        {
            Customer customer = null;
            string SP = ProducteevConstant.StoredProcedures.Customer.GET_PROSPECTIVE_CUSTOMER_BY_ID;
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
                                customer = Map(reader);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetProspectiveCustomerById(int Id) customer", ex);
            }

            return customer;
        }
        
    }
}