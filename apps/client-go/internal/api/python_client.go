package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"client-go/internal/config"
)

var cfg = config.Load()

type TrainRequest struct {
	Steps int `json:"steps"`
	Sleep int `json:"sleep"`
}

func CallTrain(req TrainRequest) (map[string]any, error) {
	body, _ := json.Marshal(req)

	url := fmt.Sprintf("%s/train", cfg.MLEndpoint)

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(body))
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	respBody, _ := io.ReadAll(resp.Body)

	var result map[string]any
	if err := json.Unmarshal(respBody, &result); err != nil {
		return nil, err
	}

	return result, nil
}
