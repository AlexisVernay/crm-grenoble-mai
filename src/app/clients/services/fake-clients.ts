import { Client } from 'src/app/shared/models/client.model';

export const fakeClient: Client[] = [
  new Client({
    id: 'vernayal',
    name: 'Alexis',
    email: 'alexis.vernay@cgi.com'
  }),
  new Client({
    id: 'meyerkev',
    name: 'Kevin',
    email: 'kevin.meyer@cgi.com'
  }),
  new Client({
    id: 'hissella',
    name: 'Alexandre',
    email: 'alexandre.hisselli@cgi.com'
  }),
  new Client({
    id: 'mariagef',
    name: 'Florian',
    email: 'florian.mariage@cgi.com'
  }),
];
