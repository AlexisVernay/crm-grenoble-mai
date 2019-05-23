import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PageClientsComponent,
    data: {title: 'Clients', label: 'Liste des clients'}
   },
  {
    path: 'add',
    component: PageAddClientComponent,
    data: {title: 'Ajout Client', label: 'Ajouter un client'},
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})

export class ClientsRoutingModule { }
