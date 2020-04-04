package userlogin

import (
	"net/http"
	"net/url"
)

type LoginProvider interface {
	Page() url.URL
	Redirect(http.ResponseWriter, *http.Request)
	ResolveLogin(map[string]interface{}) User
	ResolveLoginRequest(http.ResponseWriter, *http.Request) User
}
