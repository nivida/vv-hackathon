package hello

import (
	"fmt"
	"net/http"
)

type helloHTTP struct {
}

//SayHello handler gRPC-Request
func (h *helloHTTP) SayHello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi dude")
}
