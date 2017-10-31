import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oauthconsent',
  templateUrl: './oauthconsent.component.html',
  styleUrls: ['./oauthconsent.component.css']
})
export class OauthconsentComponent implements OnInit {
  emailAddress = '';
  productName = '';
  homePageURL = '';
  productlogoURL = '';
  privacyPolicyURL = '';
  termsAndContionsURL = '';

  onSave() {
    this.emailAddress = (<HTMLInputElement>event.target).value;
    this.productName = (<HTMLInputElement>event.target).value;
    this.homePageURL = (<HTMLInputElement>event.target).value;
    this.productlogoURL = (<HTMLInputElement>event.target).value;
    this.privacyPolicyURL = (<HTMLInputElement>event.target).value;
    this.termsAndContionsURL = (<HTMLInputElement>event.target).value;
  }

  onCancel(){
    this.emailAddress = ' ';
    this.productName = ' ';
    this.homePageURL = ' ';
    this.productlogoURL = ' ';
    this.privacyPolicyURL = ' ';
    this.termsAndContionsURL = ' ';
  }

  constructor() { }

  ngOnInit() {
  }

}
