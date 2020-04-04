import {firebase} from '../Firebase.js';
import {action, decorate, observable} from "mobx";
import {querySnapToDataArray} from "../Firebase";

export class AuthRepo {
  collectionName = 'user';
  authenticated = true;
  user = null;

  /**
   * @param user
   * @returns {Promise<boolean>}
   */
  async login(user) {
    await firebase.auth.signInWithEmailAndPassword(user.email, user.password);
    this.authenticated = true;

    return this.authenticated;
  }

  /**
   * @returns {Promise<boolean>}
   */
  async logout() {
    await firebase.auth.signOut();
    this.authenticated = false;

    return true;
  }

  /**
   * @param user
   * @returns {Object}
   */
  async loadUser(user) {
    return querySnapToDataArray(
      await firebase.firestore
        .collection(this.collectionName)
        .where('user', '==', user.id)
        .get()
    )[0];
  }
}

decorate(AuthRepo, {
  authenticated: observable,
  user: observable,
  login: action,
  logout: action,
  loadUser: action,
});
