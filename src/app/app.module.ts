import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UiModule } from './ui/ui.module';
import { PageClientsComponent } from './clients/pages/page-clients/page-clients.component';
import { PagePrestationsComponent } from './prestations/pages/page-prestations/page-prestations.component';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UiModule,
    NgbModule,
    LoginModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
