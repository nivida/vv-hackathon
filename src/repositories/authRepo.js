import {firebase} from '../Firebase.js';
import {action, decorate, observable} from "mobx";
import {querySnapToDataArray} from "../Firebase";

export class AuthRepo {
  collectionName = 'user';
  authenticated = true;
  user = null;

  /**
   * @param email
   * @param password
   * @returns {Promise<boolean>}
   */
  async login(email, password) {
    await firebase.auth.signInWithEmailAndPassword(email, password);
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
   *
   * @param userId
   * @returns {unknown}
   */
  async loadUser(userId) {
    return querySnapToDataArray(
      await firebase.firestore
        .collection(this.collectionName)
        .where('user', '==', userId)
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
