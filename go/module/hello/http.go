package hello

import (
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

type helloHttp struct {
}

func (h *helloHttp) SayHello(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	fmt.Fprintf(w, "Hi dude")
}
