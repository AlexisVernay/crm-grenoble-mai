import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './containers/ui/ui.component';
import { FooterComponent } from './conponents/footer/footer.component';
import { NavComponent } from './conponents/nav/nav.component';
import { HeaderComponent } from './conponents/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoderbaseUiModule } from '@coderbase/ui';

@NgModule({
  declarations: [UiComponent, FooterComponent, NavComponent, HeaderComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CoderbaseUiModule
  ]
})
export class UiModule { }
