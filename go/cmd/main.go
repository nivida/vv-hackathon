package main

import (
	"github.com/nivida/vv-hackathon/go/cmd/app"
)

func main() {
	// TODO: read init-config

	// TODO: create app
	vv, err := app.New()
	if err != nil {
		panic(err)
	}
	// TODO: run
	panic(vv.Run())
}
