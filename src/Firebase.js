import app from "firebase/app";
import {database, firestore, auth} from "firebase";
import {dev} from './config.json';

export function querySnapToDataArray(snapshot) {
  return snapshot.docs.map((document) => {
    return document.data();
  })
}

class Firebase {
  constructor() {
    this.app = app.initializeApp(dev);
    this.auth = auth(this.app);
    this.database = database(this.app);
    this.firestore = firestore(this.app);
  }

}

export const firebase = new Firebase();