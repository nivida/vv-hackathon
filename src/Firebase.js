
import app from "firebase/app";
import {database, firestore, auth} from "firebase";
import {config} from './config.json';

class Firebase {
  constructor() {
    this.app = app.initializeApp(config.dev.firebase);
    this.auth = auth(this.app);
    this.database = database(this.app);
    this.firestore = firestore(this.app);
  }

}

export const firebase = new Firebase();