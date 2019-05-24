import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauComponent } from './tableau/tableau.component';
import { TemplatesModule } from '../templates/templates.module';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { RouterModule, Router } from '@angular/router';
import { ActionComponent } from './components/action/action.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    TotalPipe,
    StateDirective,
    TableauComponent,
    ButtonAddComponent,
    ActionComponent,
    LinksComponent
  ],
  exports: [
    TotalPipe,
    StateDirective,
    TableauComponent,
    TemplatesModule,
    ButtonAddComponent,
    ActionComponent,
    ReactiveFormsModule,
    LinksComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    NgbPopoverModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
