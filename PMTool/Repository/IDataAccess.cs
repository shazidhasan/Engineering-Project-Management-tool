using ProducteevLikeSite.Model;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Security.Principal;



namespace ProducteevLikeSite.Repository
{
    public interface IDataAccess<T>: IDisposable
        where T : BaseEntity
    {
        void Save(T entity);
        void Save(T entity, string storedProcedure);
        void Save(T entity, string storedProcedure, IEnumerable<DbParameter> parameters);
        void SaveAll(IList<T> entity);

        bool Delete(long id);
        bool Delete(string storedProcedure, long id);
        bool Delete(string storedProcedure, DbParameter[] parameters);
        bool Delete(T entity);
        bool Delete(string storedProcedure, T entity);
        bool DeleteAll(IList<T> entity);
        bool DeleteAll(string storedProcedure, IList<T> entities);

        T Get(long id);
        T Get(long id, string storedProcedure);
        T Get(long id, string storedProcedure, bool eagarLoad);
        T Get(long id, string storedProcedure, IEnumerable<DbParameter> parameters);
        T Get(long id, bool eagerLoad);
        T Get(long id, string storedProcedure, bool eagerLoad, IEnumerable<DbParameter> parameters);
        T Get(Func<T, bool> query);
        T Get(Func<T, bool> query, bool eagerLoad);

        List<T> GetAll(Func<T, bool> query, bool eagerLoad);
        List<T> GetAll(Func<T, bool> query);

        List<T> GetAll(string storedProcedure, DbParameter[] parameters, bool eagerLoad);
        List<T> GetAll(string storedProcedure, DbParameter[] parameters);
        List<T> GetAll(bool eagerLoad);
        List<T> GetAll();

        //PagedList<T> GetPagedList(Func<T, bool> query, int page, int pageSize, bool eagarLoad);
        //PagedList<T> GetPagedList(string storedProcedure, Func<T, bool> query, int page, int pageSize, bool eagarLoad);

        IPrincipal CurrentUser { get; set; }
    }
}


