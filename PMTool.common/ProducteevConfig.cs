using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Producteev.common
{
    public class ProducteevConfig
    {

        public static string ConnectionString
        {
            get
            {
                string connectionString = string.Empty;
                string strParam = ConfigurationManager.AppSettings[ProducteevConstant.ConfigurationParams.PRODUCTEEV_CONNECTION];                

                return strParam;
            }
        }

        
    }
}
