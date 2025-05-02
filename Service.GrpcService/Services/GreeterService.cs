using Grpc.Core;
using Service.GrpcService;

namespace Service.GrpcService.Services;

public class GreeterService : Greeter.GreeterBase
{
    private readonly ILogger<GreeterService> _logger;
    public GreeterService(ILogger<GreeterService> logger)
    {
        _logger = logger;
    }

    public override Task<usersReply> SayHello(HelloRequest request, ServerCallContext context)
    {
        List<User> Users = new List<User>
        {
            new User { Id = 1, Name = "Alice", Email = "alice@example.com" },
            new User { Id = 2, Name = "Bob", Email = "bob@example.com"}
        };

        var usersReply = new usersReply();
        foreach(var user in Users)
        {
            var userRply = new user
            {
                Id= user.Id.ToString(),
                Name=user.Name,
                Email= user.Email
            };

            usersReply.Users.Add(userRply);
        }

        return Task.FromResult(usersReply);
    }
}

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}
