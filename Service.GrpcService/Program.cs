using Service.GrpcService.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddGrpc();


var app = builder.Build();

var url = builder.Configuration.GetSection("HostingUrls:Url").Value;
if (!string.IsNullOrEmpty(url))
{
    builder.WebHost.UseUrls(url);
}

// Configure the HTTP request pipeline.
app.MapGrpcService<GreeterService>();
app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();
