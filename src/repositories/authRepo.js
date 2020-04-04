import {firebase} from '../Firebase.js';
import {action, decorate, observable} from "mobx";

export class AuthRepo {
  collectionName = 'users';

  constructor() {
    const serializedUser = sessionStorage.getItem('user');
    if (serializedUser) {
      this.user = JSON.parse(serializedUser);
    } else {
      this.user = null;
    }
    this.authenticated = !!this.user;
  }

  /**
   * @param user
   * @returns {Promise<User>}
   */
  async login(user) {
    const credential = await firebase.auth.signInWithEmailAndPassword(user.email, user.password);
    this.user = credential.user;
    this.authenticated = !!this.user;

    sessionStorage.setItem('user', JSON.stringify(this.user));

    return this.user;
  }

  /**
   * @returns {Promise<boolean>}
   */
  async logout() {
    await firebase.auth.signOut();
    this.authenticated = false;
    this.user = null;
    sessionStorage.removeItem('user');

    return true;
  }

  /**
   * @param user
   * @returns {Object}
   */
  async loadUser(user) {
    console.log({user});

    const doc = await firebase.firestore
      .collection(this.collectionName)
      .doc(user.uid)
      .get();
    const record = doc.data();
    this.user = {...this.user, ...record};
    console.log(record);
    return this.user;
  }
}

decorate(AuthRepo, {
  authenticated: observable,
  user: observable,
  login: action,
  logout: action,
  loadUser: action,
});
