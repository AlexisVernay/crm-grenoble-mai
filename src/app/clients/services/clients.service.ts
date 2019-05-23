import { Injectable } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';
import { fakeClient } from './fake-clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  pCollection: Client[];
  constructor() {
    this.collection = fakeClient;
  }

  // get collection
  get collection(): Client[] {
    return this.pCollection;
  }
  // set collection
  set collection(col: Client[]) {
    this.pCollection = col;
  }
  // add item in collection
  add(item: Client) {
    this.collection.push(new Client(item));
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

