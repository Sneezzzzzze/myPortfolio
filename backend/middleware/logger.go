package middleware

import (
	"fmt"
	"time"

	"github.com/gofiber/fiber/v2"
)

func Register(app *fiber.App) {
	app.Use(func(c *fiber.Ctx) error {
		start := time.Now()
		err := c.Next()
		fmt.Printf("Request: %s | Duration: %v\n", c.Path(), time.Since(start))
		return err
	})
}
