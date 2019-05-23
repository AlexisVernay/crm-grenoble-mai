import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauComponent } from './tableau/tableau.component';
import { TemplatesModule } from '../templates/templates.module';
import { ButtonAddComponent } from './components/button-add/button-add.component';
import { RouterModule } from '@angular/router';
import { ActionComponent } from './components/action/action.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent, ButtonAddComponent, ActionComponent],
  exports: [TotalPipe, StateDirective, TableauComponent, TemplatesModule, ButtonAddComponent, ActionComponent],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    NgbPopoverModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
