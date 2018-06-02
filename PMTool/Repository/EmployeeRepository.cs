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
    public class EmployeeRepository : BaseRepository<Employee>
    {
        protected Employee Map(IDataReader reader)
        {
            var Employee = new Employee()
            {
                ID = NullHandler.GetInt32(reader, "ID"),
                Name = NullHandler.GetString(reader, "Name"),
                FirstName = NullHandler.GetString(reader, "FirstName"),
                LastName = NullHandler.GetString(reader, "LastName"),
                Designation = NullHandler.GetString(reader, "Designation"),
                Phone = NullHandler.GetString(reader, "Phone"),
                Email = NullHandler.GetString(reader, "Email"),
                Zip = NullHandler.GetString(reader, "Zip"),
                State = NullHandler.GetString(reader, "State"),
                City = NullHandler.GetString(reader, "City"),
                Address = NullHandler.GetString(reader, "Address"),                
                HasReviewAuthorization = NullHandler.GetBoolean(reader, "HasReviewAuthorization"),
                IsInManagement = NullHandler.GetBoolean(reader, "IsInManagement"),
                IsInDirectorPanel = NullHandler.GetBoolean(reader, "IsInDirectorPanel")
            };
            return Employee;
        }

        public void SaveOrUpdate(Employee p)
        {
            List<Employee> Employees = new List<Employee>();
            string SP = ProducteevConstant.StoredProcedures.Employee.SAVE_UPDATE_EMPLOYEE;
            try
            {
                using (DbCommand dbCommand = Database.GetStoredProcCommand(SP))
                {
                    Database.AddInParameter(dbCommand, "@Id", DbType.Int32, p.ID);
                    Database.AddInParameter(dbCommand, "@Name", DbType.String, p.FirstName+" "+ p.LastName);
                    Database.AddInParameter(dbCommand, "@FirstName", DbType.String, p.FirstName);
                    Database.AddInParameter(dbCommand, "@LastName", DbType.String, p.LastName);
                    Database.AddInParameter(dbCommand, "@Designation", DbType.String, p.Designation);
                    Database.AddInParameter(dbCommand, "@Phone", DbType.String, p.Phone);
                    Database.AddInParameter(dbCommand, "@Email", DbType.String, p.Email);
                    Database.AddInParameter(dbCommand, "@Zip", DbType.String, p.Zip);
                    Database.AddInParameter(dbCommand, "@State", DbType.String, p.State);
                    Database.AddInParameter(dbCommand, "@City", DbType.String, p.City);
                    Database.AddInParameter(dbCommand, "@Address", DbType.String, p.Address);                    
                    Database.AddInParameter(dbCommand, "@HasReviewAuthorization", DbType.Boolean, p.HasReviewAuthorization);
                    Database.AddInParameter(dbCommand, "@IsInManagement", DbType.Boolean, p.IsInManagement);
                    Database.AddInParameter(dbCommand, "@IsInDirectorPanel", DbType.Boolean, p.IsInDirectorPanel);
                    Database.AddOutParameter(dbCommand, "@GeneratedID", DbType.Int32, 32);
                    Database.ExecuteNonQuery(dbCommand);

                    int EmployeeId = (int)dbCommand.Parameters["@GeneratedID"].Value;

                    p.ID = EmployeeId;
                }
            }
            catch (Exception ex)
            {
                throw new Exception("EmployeeRepository.Add(Employee p) falied", ex);
            }
        }

        public void Remove(int Id)
        {
            List<Employee> Employees = new List<Employee>();
            string SP = ProducteevConstant.StoredProcedures.Employee.DELETE_EMPLOYEE;
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
                throw new Exception("EmployeeRepository.Remove(int id) falied", ex);
            }
        }

        public IEnumerable<Employee> GetAll()
        {
            List<Employee> employees = new List<Employee>();
            string SP = ProducteevConstant.StoredProcedures.Employee.GET_ALL_EMPLOYEE;
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
                                var employee = Map(reader);
                                employees.Add(employee);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetAll() Employee", ex);
            }
            return (IEnumerable<Employee>)employees;
        }


        public Employee GetByID(int Id)
        {
            Employee Employee = null;
            string SP = ProducteevConstant.StoredProcedures.Employee.GET_EMPLOYEE_BY_ID;
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
                                Employee = Map(reader);
                            }
                            reader.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Failed in GetByID(int Id) Employee", ex);
            }

            return Employee;
        }
    }
}