package config

import "os"

type Config struct {
	MLEndpoint string
}

func Load() Config {
	url := os.Getenv("ML_ENGINE_URL")
	if url == "" {
		url = "http://localhost:8000"
	}

	return Config{ MLEndpoint: url }
}
