import {action, decorate, observable} from "mobx";
import {useAuth, useFirestore, useFirestoreDocDataOnce} from "reactfire";

export class AuthRepo {
  collectionName = 'user';
  authenticated = false;
  user = null;

  /**
   * @param email
   * @param password
   * @returns {Promise<boolean>}
   */
  async login(email, password) {
    await useAuth().signInWithEmailAndPassword(email, password);
    this.authenticated = true;

    return this.authenticated;
  }

  /**
   * @returns {Promise<boolean>}
   */
  async logout() {
    await useAuth().signOut();
    this.authenticated = false;

    return true;
  }

  /**
   *
   * @param userId
   * @returns {unknown}
   */
  loadUser(userId) {
    return useFirestoreDocDataOnce(
      useFirestore().collection(this.collectionName).doc(userId)
    );
  }

}

decorate(AuthRepo, {
  authenticated: observable,
  user: observable,
  login: action,
  logout: action,
  loadUser: action,
});
