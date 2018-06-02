using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Producteev.common
{
    public class ProducteevConstant
    {
        public class StoredProcedures
        {
            public class Project {
                public const string GET_ALL_PROJECTS = "GET_ALL_PROJECTS";
                public const string GET_ALL_PROPOSALS = "GET_ALL_PROPOSALS";
                public const string GET_PROJECT_BY_ID = "GET_PROJECT_BY_ID";
                public const string SAVE_UPDATE_PROJECT = "SAVE_UPDATE_PROJECT";
                public const string DELETE_PROJECT = "DELETE_PROJECT";
            }

            public class ProjectStatus
            {
                public const string GET_ALL_PROJECT_STATUS = "GET_ALL_PROJECT_STATUS";
                public const string GET_PROJECT_STATUS_BY_ID = "GET_PROJECT_STATUS_BY_ID";
                public const string SAVE_UPDATE_PROJECT_STATUS = "SAVE_UPDATE_PROJECT_STATUS";
                public const string DELETE_PROJECT_STATUS = "DELETE_PROJECT_STATUS";
            }

            public class ProjectPriority
            {
                public const string GET_ALL_PROJECT_PRIORITY = "GET_ALL_PROJECT_PRIORITY";
                public const string GET_PROJECT_PRIORITY_BY_ID = "GET_PROJECT_PRIORITY_BY_ID";
                public const string SAVE_UPDATE_PROJECT_PRIORITY = "SAVE_UPDATE_PROJECT_PRIORITY";
                public const string DELETE_PROJECT_PRIORITY = "DELETE_PROJECT_PRIORITY";
            }

            public class ProjectType {
                public const string GET_ALL_PROJECT_TYPE = "GET_ALL_PROJECT_TYPE";
                public const string GET_PROJECT_TYPE_BY_ID = "GET_PROJECT_TYPE_BY_ID";
                public const string SAVE_UPDATE_PROJECT_TYPE = "SAVE_UPDATE_PROJECT_TYPE";
                public const string DELETE_PROJECT_TYPE = "DELETE_PROJECT_TYPE";
            }

            public class FoundatoinType
            {
                public const string GET_ALL_FOUNDATION_TYPE = "GET_ALL_FOUNDATION_TYPE";
                public const string GET_FOUNDATION_TYPE_BY_ID = "GET_FOUNDATION_TYPE_BY_ID";
                public const string SAVE_UPDATE_FOUNDATION_TYPE = "SAVE_UPDATE_FOUNDATION_TYPE";
                public const string DELETE_FOUNDATION_TYPE = "DELETE_FOUNDATION_TYPE";
            }

            public class Customer
            {
                public const string GET_ALL_CUSTOMER = "GET_ALL_CUSTOMER";
                public const string GET_ALL_PROSPECTIVE_CUSTOMER = "GET_ALL_PROSPECTIVE_CUSTOMER";
                public const string GET_PROSPECTIVE_CUSTOMER_BY_ID = "GET_PROSPECTIVE_CUSTOMER_BY_ID";                
                public const string GET_CUSTOMER_BY_ID = "GET_CUSTOMER_BY_ID";
                public const string SAVE_UPDATE_CUSTOMER = "SAVE_UPDATE_CUSTOMER";
                public const string DELETE_CUSTOMER = "DELETE_CUSTOMER";
            }

            public class Proposal
            {
                public const string GET_ALL_PROPOSAL = "GET_ALL_PROPOSAL";
                public const string GET_ALL_PROSPECTIVE_PROPOSAL = "GET_ALL_PROSPECTIVE_PROPOSAL";
                public const string GET_PROSPECTIVE_PROPOSAL_BY_ID = "GET_PROSPECTIVE_PROPOSAL_BY_ID";
                public const string GET_PROPOSAL_BY_ID = "GET_PROPOSAL_BY_ID";
                public const string SAVE_UPDATE_PROPOSAL = "SAVE_UPDATE_PROPOSAL";
                public const string DELETE_PROPOSAL = "DELETE_PROPOSAL";
            }

            public class Employee
            {
                public const string GET_ALL_EMPLOYEE = "GET_ALL_EMPLOYEE";
                public const string GET_EMPLOYEE_BY_ID = "GET_EMPLOYEE_BY_ID";
                public const string SAVE_UPDATE_EMPLOYEE = "SAVE_UPDATE_EMPLOYEE";
                public const string DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
            }

            public class Task
            {
                public const string GET_ALL_TASK = "GET_ALL_TASK";
                public const string GET_ALL_TASK_BY_PROJECT_ID = "GET_ALL_TASK_BY_PROJECT_ID";
                public const string GET_ALL_TASK_BY_PROPOSAL_ID = "GET_ALL_TASK_BY_PROPOSAL_ID";
                public const string GET_ALL_TASK_BY_EMPLOYEE_ID = "GET_ALL_TASK_BY_EMPLOYEE_ID";
                public const string GET_ALL_TASK_BY_CLIENT_ID = "GET_ALL_TASK_BY_CLIENT_ID";
                public const string GET_TASK_BY_ID = "GET_TASK_BY_ID";
                public const string SAVE_UPDATE_TASK = "SAVE_UPDATE_TASK";
                public const string DELETE_TASK = "DELETE_TASK";
                public const string GET_ALL_TASK_STATUS = "GET_ALL_TASK_STATUS"; 
            }

            public class Note
            {
                public const string GET_ALL_NOTE = "GET_ALL_NOTE";
                public const string GET_ALL_NOTE_BY_TASK_ID = "GET_ALL_NOTE_BY_TASK_ID";              
                public const string SAVE_UPDATE_NOTE = "SAVE_UPDATE_NOTE";
                public const string DELETE_NOTE = "DELETE_NOTE";              
            }


        }


        public class ConfigurationParams
        {
            public const string PRODUCTEEV_CONNECTION = "PRODUCTEEV_CONNECTION";
        }

    }
}
