//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;

    public partial class ApplicationUser
    {
        public int Id { get; set; }
        
        public string EmailID { get; set; }
        public string UserName { get; set; }
        public byte[] Password { get; set; }
        public int UserRoleId { get; set; }

        [ForeignKey("UserRoleId")]
        public virtual UserRole UserRole { get; set; }
    }
}