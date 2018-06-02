using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Principal;
using System.Xml;
using System.Reflection;
using ProducteevLikeSite.Model;
using Microsoft.Practices.EnterpriseLibrary.Data;
using Microsoft.Practices.EnterpriseLibrary.Data.Sql;
using Microsoft.Ajax.Utilities;
using Producteev.common;

namespace ProducteevLikeSite.Repository
{
    ////// <summary>
    ////// Contains the function related to database access
    ////// <//summary>
    public abstract class BaseRepository<T> : IDisposable, IRepository<T> where T:BaseEntity
    {

        //// Flag: Has Dispose already been called?
        bool disposed = false;

        public const int MAX_DB_COMMAND_TIMEOUT = 1000;
        #region Properties
        //* <summary>
        // Gets Database information
        // <//summary>*//

        //// Protected implementation of Dispose pattern.
        protected virtual void Dispose(bool disposing)
        {
            if (disposed)
                return;

            if (disposing)
            {
                ////handle.Dispose();
                //// Free any other managed objects here.
                ////
            }

            //// Free any unmanaged objects here.
            ////
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public void SaveOrUpdate(T p)
        {
            throw new NotImplementedException();
        }

        public void Edit(T p)
        {
            throw new NotImplementedException();
        }

        public void Remove(int Id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> GetAll()
        {
            throw new NotImplementedException();
        }

        public T GetByID(int Id)
        {
            throw new NotImplementedException();
        }

        
        protected internal Database Database
        {
            get;
            private set;
        }

        public IPrincipal CurrentUser
        {
            get;
            set;
        }


        #endregion

        #region Constructer & Destructer
        protected BaseRepository()
        {
            string connectionStringName = ProducteevConfig.ConnectionString;
            //Database = DatabaseFactory.CreateDatabase(connectionString);
            Database = new SqlDatabase(ConfigurationManager.ConnectionStrings[connectionStringName].ConnectionString);
        }

        protected BaseRepository(string connectionString)
        {
            //Check.Require(!string.IsNullOrEmpty(connectionString), "The connection string must be supplied to instantiated this data access object (DAO).");
            Database = DatabaseFactory.CreateDatabase(connectionString);
            Database = new SqlDatabase(connectionString);
        }

        #endregion
    }
}


