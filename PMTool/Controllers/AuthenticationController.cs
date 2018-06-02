using System.Text;
using System.Web.Http;
using ProducteevLikeSite.Models;
using ProducteevLikeSite.Repository;

namespace ProducteevLikeSite.Controllers
{
    [RoutePrefix("api/Authentication")]
    public class AuthenticationController : ApiController
    {
        [HttpGet]
        [Route("NoAuth")]
        [Authorize(Roles = "Admin")]
        public IHttpActionResult NoAuth()
        {
            AccountsRepository userRoles = new AccountsRepository();
            return Ok(userRoles.GetUserRoles());
        }

        [HttpGet]
        [Route("AuthorizedUser")]
        [Authorize(Roles ="Admin")]
        public IHttpActionResult AuthorizedUser()
        {
            AccountsRepository userRoles = new AccountsRepository();
            return Ok(userRoles.GetUserRoles());
        }

        [HttpGet]
        [Route("IsAuthenticatedUser")]
        [Authorize]
        public IHttpActionResult IsAuthenticatedUser()
        {            
            if (User.Identity.IsAuthenticated)
            {
                return Ok(new { Status = "success", Value = true } );                
            }
            return Ok(new { Status = "success", Value = true });
        }

        [HttpGet]
        [Route("AuthenticatedUser")]
        [Authorize]
        public IHttpActionResult AuthenticatedUser()
        {
            EmployeeRepository emp = new EmployeeRepository();
            if (User.Identity.IsAuthenticated)
            {                
                return Ok(emp.GetAll());
            }
            return Ok(emp.GetAll());
        }

        [HttpGet]
        [Route("GetUserInfo/{userName}")]
        [Authorize]
        public IHttpActionResult GetUserInfo(string userName)
        {
            AccountsRepository accRepo = new AccountsRepository();
            ApplicationUser user = accRepo.GetAuthenticatedUserInfo(userName);
            if (user != null)
                return Ok(new User() {
                    Id = user.Id,
                    UserName = user.UserName,
                    Password = "",
                    EmailID = user.EmailID,
                    RoleId = user.UserRoleId,
                    FirstName = string.Empty,
                    LastName = string.Empty
        });

            else
                return Ok(false);
        }


        [HttpPost]
        [Route("Signup")]
        //[Authorize(Roles = "Admin")]
        public IHttpActionResult Signup([FromBody]Models.User userData)
        {
            AccountsRepository regObj = new AccountsRepository();
            ApplicationUser regData = new ApplicationUser();
            regData.EmailID = userData.EmailID;
            regData.Password = Encoding.UTF8.GetBytes(userData.Password.ToString());
            regData.UserName = userData.UserName;
            regData.UserRoleId = userData.RoleId;

            return Ok(regObj.Register(regData));
        }


        [HttpPost]
        [Route("Signin")]        
        public IHttpActionResult Login([FromBody]Models.User userData)
        {
            AccountsRepository accRepo = new AccountsRepository();
            bool isValid =  accRepo.Login(userData.UserName, userData.Password.ToString());

            return Ok(new { Status = "success" });
        }
    }
}
