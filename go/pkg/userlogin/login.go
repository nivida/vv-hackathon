package userlogin

type Login struct {
	UserType string
	User     User
	Groups   []interface{}
}
