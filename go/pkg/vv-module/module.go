package vv-module

import (
	"github.com/julienschmidt/httprouter"
)
type ModuleConfig struct {
	Router *httprouter.Router
}

type Module interface {
	Load(*ModuleConfig) error
}