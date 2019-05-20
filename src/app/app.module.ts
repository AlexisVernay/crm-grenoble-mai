import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';
import { ClientsModule } from './clients/clients.module';
import { PrestationsModule } from './prestations/prestations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    PageNotFoundModule,
    SharedModule,
    ClientsModule,
    PrestationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
