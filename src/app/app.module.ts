import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { OauthconsentComponent } from './oauthconsent/oauthconsent.component';
import { DomainverificationComponent } from './domainverification/domainverification.component';
import {DropdownDirective} from "./dropdown.directive";
import { ClientloginComponent } from './clientlogin/clientlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CredentialsComponent,
    OauthconsentComponent,
    DomainverificationComponent,
    DropdownDirective,
    ClientloginComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
