using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace DotnetProjectReactAndTS.Controllers.MembershipManagement
{

   
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {

        public List<User> Users = new List<User>
        {
            new User { Id = 1, Name = "Alice", Email = "alice@example.com" },
            new User { Id = 2, Name = "Bob", Email = "bob@example.com"}
        };

        // GET: api/users
        [HttpGet("users")]
        public IActionResult GetUsers()
        {
            return Ok(Users);
        }
        
        [HttpPost("deleteUser")]
        public IActionResult GetDeleteUser(int id)
        {
            return Ok(Users);
        } 
        
        [HttpPost("saveUser")]
        public IActionResult AddorUpdateUser(User user)
        {
            return Ok(Users);
        }

        public class User
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Email { get; set; }
        }
    }

    public class ControllerBase : Controller
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        
        {

        }

        public override void  OnActionExecuted(ActionExecutedContext context)
        {

        }

    }


}
