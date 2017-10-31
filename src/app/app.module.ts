import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as $ from 'jquery';
import * as _ from 'underscore';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { OauthconsentComponent } from './oauthconsent/oauthconsent.component';
import { DomainverificationComponent } from './domainverification/domainverification.component';
import { DropdownDirective } from "./dropdown.directive";
import { RouterModule, Routes } from "@angular/router";
import { ClientloginComponent } from './clientlogin/clientlogin.component';
import { CreateClientIdComponent } from './credentials/create-client-id/create-client-id.component';
import { WebAppComponent } from './credentials/create-client-id/web-app/web-app.component';
import { AndroidAppComponent } from './credentials/create-client-id/android-app/android-app.component';
import { NativeAppComponent } from './credentials/create-client-id/native-app/native-app.component';
import {AuthGuard} from "./auth-guard.service";
import {AuthService} from "./auth.service";

const appRoutes: Routes =  [
  {path:'',component: ClientloginComponent},
  {path:'Credentials', canActivate: [AuthGuard], component: CredentialsComponent},
  {path:'CreateClientId',component: CreateClientIdComponent},
  {path:'AndroidApp',component:AndroidAppComponent},
  {path:'NativeApp',component:NativeAppComponent},
  {path:'WebApp',component:WebAppComponent},
  {path:'OAuthConsentScreen', canActivate: [AuthGuard], component: OauthconsentComponent },
  {path:'DomainVerification', canActivate: [AuthGuard], component:DomainverificationComponent},
  {path:'Header',component:HeaderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CredentialsComponent,
    OauthconsentComponent,
    DomainverificationComponent,
    DropdownDirective,
    ClientloginComponent,
    CreateClientIdComponent,
    WebAppComponent,
    AndroidAppComponent,
    NativeAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ClientloginComponent, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
