import {firebase} from '../Firebase.js';
import {action, decorate, observable} from "mobx";
import {querySnapToDataArray} from "../Firebase";
import {User} from "../models/user";

export class UserRepo {
  collectionName = 'users';

  /**
   * @param role
   * @returns {Object}
   */
  async getUsersByRole(role) {
    return querySnapToDataArray(await firebase.firestore
      .collection(this.collectionName)
      .where('role', '==', role)
      .get(),
      User
    );
  }
}

decorate(UserRepo, {
  authenticated: observable,
  user: observable,
  login: action,
  logout: action,
  loadUser: action,
});
