import { Component, OnInit } from '@angular/core';
import { ClientloginComponent } from "../../../clientlogin/clientlogin.component";
import { Http } from "@angular/http";


@Component({
  selector: 'app-native-app',
  templateUrl: './native-app.component.html',
  styleUrls: ['./native-app.component.css']
})
export class NativeAppComponent implements OnInit {

  appName = '';
  domain = '';
  redirectURI = '';
  tokken = '';
  userId = '';
  scopes = '';
  clientId = '';
  clientSecret = '';
  privateURI = '';

  constructor(private http:Http, private data: ClientloginComponent) { }

  onUpdateAppName(event: Event) {
    this.appName = (<HTMLInputElement>event.target).value;
    console.log(this.appName);
  }

  onUpdateDomain(event: Event) {
    this.domain = (<HTMLInputElement>event.target).value;
    console.log(this.domain);
  }

  onUpdateRedirectURI(event: Event) {
    this.redirectURI = (<HTMLInputElement>event.target).value;
    console.log(this.redirectURI);
  }

  sendingData() {
    var JSONobj = {"token": this.data.getToken(),
      "domain": this.domain,
      "appName": this.appName,
      "scopes": "basic",
      "type": "private",
      "redirectURI": this.domain};
    return this.http.post('http://localhost:1337/client/register', JSONobj).
    subscribe(
      (response) => {
        this.tokken = response.json();
        this.userId = this.tokken["userId"];
        this.scopes = this.tokken["scopes"];
        this.clientId = this.tokken["clientId"];
        this.clientSecret = this.tokken["clientSecret"];
        this.privateURI = this.tokken["privateURI"];
        console.log(this.tokken);
        console.log(this.userId);
        console.log(this.scopes);
        console.log(this.clientId);
        console.log(this.clientSecret);
        console.log(this.privateURI);
      },
      (error) => console.log(error)
    );
  }

  ngOnInit() {
  }

}
