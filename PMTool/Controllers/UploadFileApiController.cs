using ProducteevLikeSite.Models;
using ProducteevLikeSite.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProducteevLikeSite.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]

    public class UploadFileApiController : ApiController
    {
        [HttpPost]
        public IHttpActionResult Post()
        {
            HttpResponseMessage response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;
            if (httpRequest.Files.Count > 0)
            {
                foreach (string file in httpRequest.Files)
                {
                    var postedFile = httpRequest.Files[file];
                    var filePath = HttpContext.Current.Server.MapPath("~/UploadFile/" + postedFile.FileName);
                    postedFile.SaveAs(filePath);
                }
            }
            return Ok();

            //if (!Request.Content.IsMimeMultipartContent())
            //    throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);

            //var provider = new MultipartMemoryStreamProvider();
            //await Request.Content.ReadAsMultipartAsync(provider);
            //foreach (var file in provider.Contents)
            //{
            //    var filename = file.Headers.ContentDisposition.FileName.Trim('\"');
            //    var buffer = await file.ReadAsByteArrayAsync();
            //    //Do whatever you want with filename and its binaray data.
            //}

            //return Ok();
        }
    }
}
