package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/laughing_egg/Fiber-project-1/handlers"
)

func Setup(app *fiber.App) {
	api := app.Group("/api")

	api.Get("/hello", handlers.Hello)
	api.Get("/ping", handlers.Ping)
}
