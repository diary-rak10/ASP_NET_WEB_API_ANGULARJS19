using Microsoft.EntityFrameworkCore;
using CrudAngularASP.Data;
using CrudAngularASP.Repositories;
using CrudAngularASP.Services;

var builder = WebApplication.CreateBuilder(args);

// Ajouter le DbContext avec PostgreSQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Ajouter les services
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IProductService, ProductService>();

// Ajouter les contrôleurs
builder.Services.AddControllers();

// Configurer CORS pour Angular
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", builder =>
    {
        builder.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configurer le pipeline
//app.UseHttpsRedirection();
app.UseCors("AllowAngularApp");
app.UseAuthorization();
app.MapControllers();

app.Run();