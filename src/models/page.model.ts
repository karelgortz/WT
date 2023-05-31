import firebase from "firebase/compat";
import DocumentReference = firebase.firestore.DocumentReference;

export class Page {
  public count: number;
  public offset: number;
  public limit: number;
  public lastItem: DocumentReference;
  public firstItem: DocumentReference;


  constructor(count?: number, offset?: number, limit?: number) {
    this.count = count;
    this.offset = offset;
    this.limit = limit;
    this.lastItem = null;
    this.firstItem = null;
  }
}

