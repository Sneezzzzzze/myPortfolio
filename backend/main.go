package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/laughing_egg/Fiber-project-1/middleware"
	"github.com/laughing_egg/Fiber-project-1/routes"
)

func main() {
	app := fiber.New()

	// Load config (if needed)
	//config.Load()

	// Middleware
	middleware.Register(app)
	middleware.ExposeMonitorRoute(app)

	// Routes
	routes.Setup(app)

	// CORS
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173",
		AllowMethods: "GET,POST,PUT,DELETE",
	}))

	app.Listen(":3000")
}
