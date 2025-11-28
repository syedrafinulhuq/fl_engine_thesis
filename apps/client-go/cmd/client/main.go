package main

import (
	"log"
	"client-go/internal/training"
)

func main() {
	log.Println("Go FL Client starting...")

	err := training.RunSingleClient()
	if err != nil {
		log.Fatalf("Client error: %v", err)
	}

	log.Println("Go FL Client done.")
}
