#region History

/* --------------------------------------------------------------------------------
 * Client Name: NQF
 * Project Name: OPLM
 * Module: OPLM.Common
 * Name: BaseEntity.cs
 * Purpose: Base Entity class
 *                   
 * Author: AFS
 * Language: C# SDK version 2.0
 * --------------------------------------------------------------------------------
 * Change History:
 * version: 1.0    AFS  09/26/09
 * Description: Initial Development
 * -------------------------------------------------------------------------------- */

#endregion

using ProducteevLikeSite.Repository;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Xml.Serialization;


namespace ProducteevLikeSite.Model
{
    /// <summary>
    /// Base class for Entity
    /// </summary>
    [Serializable]
    public abstract class BaseEntity
    {
        protected BaseEntity()
        {            
        }
        /// <summary>
        /// Gets or sets the id.
        /// </summary>
        /// <value>The id.</value>
        [XmlElement, SoapElement]
        public virtual long ID { get; set; }
        /// <summary>
        /// Gets a value indicating whether this instance is new.
        /// </summary>
        /// <value><c>true</c> if this instance is new; otherwise, <c>false</c>.</value>
        
        public bool IsNew { get { return (ID <= 0); } }
        /// <summary>
        /// Gets or sets a value indicating whether this <see cref="PanthBaseEntity"/> is active.
        /// </summary>
        /// <value><c>true</c> if active; otherwise, <c>false</c>.</value>
        [XmlElement, SoapElement]
        public virtual bool IsActive { get; set; }
        /// <summary>
        /// Gets or sets a value indicating whether this <see cref="PanthBaseEntity"/> is deleted.
        /// </summary>
        /// <value><c>true</c> if deleted; otherwise, <c>false</c>.</value>
        [XmlElement, SoapElement]
        public virtual bool IsDeleted { get; set; }
        /// <summary>
        /// Gets or sets a value indicating whether this <see cref="PanthBaseEntity"/> is locked.
        /// </summary>
        /// <value><c>true</c> if locked; otherwise, <c>false</c>.</value>
        [XmlIgnore, SoapElement]
        public bool IsLocked { get; set; }

        /// <summary>
        /// Gets or sets the datetime stamp.
        /// </summary>
        /// <value>The datetime stamp.</value>
        [XmlIgnore]
        public virtual DateTime SystemModstamp { get; set; }

        /// <summary>
        /// Gets or sets a value indicating whether this instance is loading.
        /// </summary>
        /// <value>
        /// 	<c>true</c> if this instance is loading; otherwise, <c>false</c>.
        /// </value>
        
        
        public int CreatedBy { get; set; }

        public int LastModifiedBy { get; set; }


        public DateTime CreatedDate { get; set; }


        public DateTime LastModifiedDate { get; set; }




        /// <summary>
        /// Cleans the before save.
        /// </summary>
        public virtual void CleanBeforeSave()
        {
            if(IsNew)
            {
                IsActive = true;
                IsDeleted = false;
                IsLocked = false;
            }
        }

        /// <summary>
        /// Froms the reader.
        /// </summary>
        /// <param name="reader">The reader.</param>
        public virtual void FromReader(IDataReader reader)
        {
            ID = NullHandler.GetLong(reader["Id"]);
            IsActive = NullHandler.GetBoolean(reader["IsActive"]);
            IsDeleted = NullHandler.GetBoolean(reader["IsDeleted"]);
            IsLocked = NullHandler.GetBoolean(reader["IsLocked"]);
            SystemModstamp = NullHandler.GetDateTime(reader["SystemModstamp"]);
        }        
    }
}