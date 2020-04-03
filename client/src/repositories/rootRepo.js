import {AuthRepo} from "./authRepo";
import * as React from "react";

export class RootRepo {
  constructor() {
    this.authRepo = new AuthRepo();
  }
}

export const rootStoreInstance = new RootRepo();
export const StoreContext = React.createContext(rootStoreInstance);
