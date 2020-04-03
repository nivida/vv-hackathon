import {action, decorate, observable} from "mobx";
import {UserRepositoryClient} from "../../proto-clients/proto/userRepository_grpc_web_pb.js";
import {production} from "../../config.json";

export class AuthRepo {

  authenticated = true;
  user = null;

  constructor() {
    this.userRepositoryClient = new UserRepositoryClient(production.grpcEndpoint);
  }

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
