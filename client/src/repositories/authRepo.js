import {action, decorate, observable} from "mobx";
import {useAuth, useFirestore, useFirestoreDocDataOnce} from "reactfire";

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
    this.authenticated = await useAuth().signInWithEmailAndPassword(email, password);

    return true;
  }

  /**
   * @returns {Promise<boolean>}
   */
  async logout() {
    this.authenticated = await useAuth().signOut();

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
