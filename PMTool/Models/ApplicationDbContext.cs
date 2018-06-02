using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProducteevLikeSite.Models
{
    public class ApplicationDbContexts
    {
        AuthenticationDbContext db = new AuthenticationDbContext();
        public AuthenticationDbContext ApplicationDbContext { get { return db; } }

    }
}