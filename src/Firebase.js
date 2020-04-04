import app from "firebase/app";
import {auth, database, firestore} from "firebase";
import {dev} from './config.json';

export function querySnapToDataArray(snapshot, klass = null) {
  return snapshot.docs.map((document) => {
    const data = document.data();
    data.id = document.id;

    if (klass) {
      return klass.fromPlainObject(data);
    }

    return data;
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
