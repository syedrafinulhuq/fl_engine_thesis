package training

import (
	"log"
	"client-go/internal/api"
)

func RunSingleClient() error {
	log.Println("Running FL client simulation...")

	req := api.TrainRequest{
		Steps: 6000,
		Sleep: 7,
	}

	update, err := api.CallTrain(req)
	if err != nil {
		return err
	}

	log.Printf("Local update received from Python: %+v\n", update)

	return nil
}
