using ProducteevLikeSite.Model;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProducteevLikeSite.Repository
{
    interface IRepository<T>  where T:BaseEntity
    {

        void SaveOrUpdate(T p);
        void Edit(T p);
        void Remove(int Id);
        IEnumerable<T> GetAll();

        T GetByID(int Id);
    }
}
