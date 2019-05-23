import { StateClient } from '../enums/state-client.enum';

export class Client {
  id: string;
  name: string;
  email: string;
  state = StateClient.ACTIF;
  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
