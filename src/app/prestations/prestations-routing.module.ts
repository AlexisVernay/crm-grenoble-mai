import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    data: {title: 'Prestations', label: 'Liste des prestations'}
   },
  {
    path: 'add',
    component: PageAddPrestationComponent,
    data: {title: 'Ajout Prestation', label: 'Ajouter une prestation'},
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})

export class PrestationsRoutingModule { }
