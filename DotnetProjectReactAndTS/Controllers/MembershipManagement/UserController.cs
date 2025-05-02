using Grpc.Net.Client;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Service.GrpcService;
using static Service.GrpcService.Greeter;

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
            List<User> _users = new List<User>();
            var channel = GrpcChannel.ForAddress("http://192.168.52.138:5000");
            var client = new Greeter.GreeterClient(channel);
            var reply = client.SayHello(new HelloRequest { Name = "GreeterClient" });
            foreach (var user in reply.Users)
            {
                _users.Add(
                        new User
                        {
                            Id = int.Parse(user.Id),
                            Name = user.Name,
                            Email = user.Email
                        });
            }

            return Ok(_users);
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

        public override void OnActionExecuted(ActionExecutedContext context)
        {

        }

    }


}
