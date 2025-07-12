package middleware

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/monitor"
)

// ExposeMonitorRoute sets up the /dashboard endpoint
func ExposeMonitorRoute(app *fiber.App) {
	app.Get("/monitor", monitor.New(monitor.Config{
		Title: "📊 Fiber API Metrics Dashboard",
	}))
}
