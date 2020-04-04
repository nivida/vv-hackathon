package main

import (
	"flag"
	"log"
	"os"

	"github.com/nivida/vv-hackathon/go/cmd/app"
	"github.com/nivida/vv-hackathon/go/module/lessonRepository"
	"gopkg.in/yaml.v2"
)

func main() {

	cfgFile := flag.String("config", "./config.yaml", "Path to config file")

	flag.Parse()

	// TODO: read init-config
	var config app.Config
	log.Println(os.Getwd())
	f, err := os.Open(*cfgFile)
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

	// Adding Modules
	vv.LoadModule(new(lessonRepository.LessonModule))
	// TODO: run
	panic(vv.Run())
}
