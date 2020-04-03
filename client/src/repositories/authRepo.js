import {action, decorate, observable} from "mobx";

export class AuthRepo {

  authenticated = false;
  user = null;

  login() {
    // TODO implement
  }

  logout() {
    // TODO implement
  }

  loadUser() {
    // TODO implement
  }

}

decorate(AuthRepo, {
  authenticated: observable,
  user: observable,
  login: action,
  logout: action,
  loadUser: action,
});
