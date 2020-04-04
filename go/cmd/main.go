package main

import (
	"flag"
	"os"

	"github.com/nivida/vv-hackathon/go/cmd/app"
	"github.com/nivida/vv-hackathon/go/module/hello"
	"github.com/nivida/vv-hackathon/go/module/lessons"
	"gopkg.in/yaml.v2"
)

func main() {

	var config app.Config
	// Load Config
	// TODO: may use framework with defaults
	cfgFile := flag.String("config", "./config.yaml", "Path to config file")
	flag.Parse()

	f, err := os.Open(*cfgFile)
	if err != nil {
		panic(err)
	}
	err = yaml.NewDecoder(f).Decode(&config)
	if err != nil {
		panic(err)
	}

	// Create application
	server, err := app.New(&config)
	if err != nil {
		panic(err)
	}

	// Adding Modules
	server.LoadModule(new(hello.Module))
	server.LoadModule(new(lessons.Module))

	// run
	panic(server.Run())
}
