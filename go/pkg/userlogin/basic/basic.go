package basic

import (
	"net/http"
	"net/url"

	"github.com/nivida/vv-hackathon/go/pkg/userlogin"
)

type basic struct {
	uri url.URL
}

func (b *basic) Page() url.URL {
	return b.uri
}
func (b *basic) Redirect(w http.ResponseWriter, r *http.Request) error {
	http.Redirect(w, r, b.uri.String(), http.StatusTemporaryRedirect)
	return nil
}
func (b *basic) ResolveLogin(creds map[string]interface{}) *userlogin.Login {
	if creds["username"].(string) == "roman" &&
		creds["password"].(string) == "alfa" {
		return &userlogin.Login{
			UserType: "basic",
		}
	}
	return nil
}
func (b *basic) ResolveLoginRequest(w http.ResponseWriter, r *http.Request) *userlogin.Login {
	creds := map[string]interface{}{}
	var ok bool
	creds["username"], creds["password"], ok = r.BasicAuth()
	if !ok {
		return nil
	}
	return b.ResolveLogin(creds)
}
