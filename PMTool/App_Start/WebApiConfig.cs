using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace ProducteevLikeSite
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // New code
            //config.EnableCors();

            // Web API routes
            config.MapHttpAttributeRoutes();


            //config.Routes.MapHttpRoute(
            //    name: "ApiById",
            //    routeTemplate: "api/{controller}/{id}/{param}",
            //    defaults: null
            //);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}/{param1}",
                defaults: new { id = RouteParameter.Optional, param1 = RouteParameter.Optional }
            );
        }
    }
}
