import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') nomClass: string;
  constructor() {
    console.log('directive called');
   }

  ngOnChanges() {
    console.log(this.appState);
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: State): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLocaleLowerCase()}`;
  }
}

// appState vaut Annulé => state-annule
// appState vaut Option => state-option
// appState vaut Confirmé => state-confirme
// res fn donner cette value à l'attribut class de mon
