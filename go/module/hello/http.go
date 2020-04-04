package hello

import (
	"fmt"
	"net/http"
)

type helloHttp struct {
}

func (h *helloHttp) SayHello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi dude")
}
