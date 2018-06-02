﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ProducteevLikeSite.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data;
    using System.Data.Entity.ModelConfiguration.Conventions;

    public partial class AuthenticationDbContext : DbContext
    {
        public AuthenticationDbContext()
            : base("name=ProducteevConnection")
        {
            Database.SetInitializer<AuthenticationDbContext>(new DropCreateDatabaseIfModelChanges<AuthenticationDbContext>());
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    
        public virtual DbSet<ApplicationUser> ApplicationUsers { get; set; }                
        public virtual DbSet<UserRole> UserRoles { get; set; }
    }
}
