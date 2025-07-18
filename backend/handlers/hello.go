package handlers

import (
	"github.com/gofiber/fiber/v2"
)

func Hello(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"message": "Hello, Fiber!",
	})
}

func Ping(c *fiber.Ctx) error {
	return c.SendString("pong")
}
