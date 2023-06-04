import firebase from "firebase/compat";
import DocumentReference = firebase.firestore.DocumentReference;

export class Page {
  public count: number;
  public offset: number;
  public limit: number;


  constructor(count?: number, offset?: number, limit?: number) {
    this.count = count;
    this.offset = offset;
    this.limit = limit;
  }
}

