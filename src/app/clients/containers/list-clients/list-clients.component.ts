import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  // collection: Client[];
  collection$: Observable<Client[]>;
  headers: Array<string>;

  constructor(
    private clientsService: ClientsService
    ) { }

  ngOnInit() {
    this.collection$ = this.clientsService.collection;
    /*this.sub = this.clientsService.collection.subscribe(
      (data) => {
        this.collection = data;
      }
    );*/
    this.headers = [
      'Id',
      'Nom',
      'Email',
      'Type'
    ];
  }

  change(param: {item: Client, state: StateClient}) {
    this.clientsService.update(param.item, param.state);
  }

}
