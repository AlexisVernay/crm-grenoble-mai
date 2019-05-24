import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { Subject } from 'rxjs';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-detail-prestation',
  templateUrl: './detail-prestation.component.html',
  styleUrls: ['./detail-prestation.component.scss']
})
export class DetailPrestationComponent implements OnInit {
  presta$: Subject<Prestation>;
  constructor(
    private prestationsService: PrestationsService
  ) { }

  ngOnInit() {
    this.presta$ = this.prestationsService.presta$;
  }

}
