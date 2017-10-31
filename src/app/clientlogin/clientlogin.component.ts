import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import { Http } from "@angular/http";
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-clientlogin',
  templateUrl: './clientlogin.component.html',
  styleUrls: ['./clientlogin.component.css']
})

@Injectable()
export class ClientloginComponent implements OnInit {
  email = '';
  pass = '';
  public static token;

  @ViewChild('f') signupForm: NgForm;
  submitted=false;

  constructor(private http:Http, private router: Router, private authService: AuthService) {
  }

  onUpdateUsername(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
  }

  onUpdatePassword(event: Event){
    this.pass = (<HTMLInputElement>event.target).value;
  }



  onSubmit() {
    var JSONobj = {
      "userId": this.email,
      "password": this.pass };
    this.submitted = true;
    this.signupForm.reset();
    this.authService.login();
    this.router.navigate(['/Credentials']);
    return this.http.post('http://localhost:1337/auth', JSONobj).
    subscribe(
      (response) => {
        ClientloginComponent.token = response.json();
        ClientloginComponent.token = ClientloginComponent.token["token"];
        console.log(ClientloginComponent.token);
      },
      (error) => console.log(error)
    );
  }

  public getToken() {
    return ClientloginComponent.token;
  }

  ngOnInit() {
  }

}
