package main

import (
	"os"

	"github.com/nivida/vv-hackathon/go/cmd/app"
	"gopkg.in/yaml.v2"
)

func main() {

	// TODO: read init-config
	var config app.Config
	f, err := os.Open("./config.yaml")
	if err != nil {
		panic(err)
	}
	err = yaml.NewDecoder(f).Decode(&config)
	if err != nil {
		panic(err)
	}

	// TODO: create app
	vv, err := app.New(&config)
	if err != nil {
		panic(err)
	}
	// TODO: run
	panic(vv.Run())
}
