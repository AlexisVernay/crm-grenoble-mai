import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { database } from 'firebase';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  // collection: Prestation[];
  collection$: Observable<Prestation[]>;
  headers: Array<string>;
  private sub: Subscription;
  constructor(
    private prestationsService: PrestationsService
    ) { }

  ngOnInit() {
    this.collection$ = this.prestationsService.collection;
    /*this.sub = this.prestationsService.collection.subscribe(
      (data) => {
        this.collection = data;
      }
    );*/
    this.headers = [
      'Type',
      'Client',
      'Durée',
      'Total HT',
      'Total TTC',
      'State',
      'Action'
    ];
  }

  change(param: {item: Prestation, state: State}) {
    this.prestationsService.update(param.item, param.state);
  }

  action(param: {item: Prestation, action: string}) {
    if (param.action === 'delete') {
      this.prestationsService.delete(param.item);
    }
    if (param.action === 'edit') {
      console.log('redirection vers route edit prestation');
    }
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
