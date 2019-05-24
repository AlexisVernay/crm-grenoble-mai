import { Injectable } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';
import { fakeClient } from './fake-clients';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private itemsCollection: AngularFirestoreCollection<Client>;
  pCollection: Observable<Client[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Client>('clients');
    this.collection = this.itemsCollection.valueChanges().pipe(
      // map(tab => tab.map(obj => new Prestation(obj)))
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    );
  }

  // get collection
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }
  // set collection
  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }
  // add item in collection
  add(item: Client) {

  }
  // update item in collection
  update(item: Client, state?: StateClient) {
    const data = {...item};
    data.state = state;
    // appel http (item)
    item.state = state;
    console.log(item);
  }

  // delete item in collectim
  delete(item: Client) {
    console.log(item);
  }

  // get item by id
}

