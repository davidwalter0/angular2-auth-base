import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/filter';
// Import RxJs required methods
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Title } from '@angular/platform-browser';
import { MdlSnackbarService } from 'angular2-mdl';
import { AbstractComponent } from '../abstract.component';

import { AngularFireAuth } from "angularfire2/angularfire2";
import { AuthGuard } from '../auth.service';

import { environment } from '../../environments/environment';

// const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');

@Component({
  selector: 'authenticated',
  styleUrls: [
    'authenticated.component.css',
  ],
  templateUrl: 'authenticated.component.html'
})

// declare var process: any;





export class AuthenticatedComponent implements OnInit {

  host: string = environment.QRCODE_GENERATOR_HOST;
  port: string = environment.QRCODE_GENERATOR_PORT;
  // url: string = "http://" + environment.QRCODE_GENERATOR_HOST + ":" + environment.QRCODE_GENERATOR_PORT + "/?data=";
  url: string = `https://${this.host}:${this.port}/?data=`;

  default_url: string = "https://127.0.0.1:8081/?data=";

  // url: string = "";

  email: string = "";
  name: string = "";
  image: string = "";

  text: string = "";
  qrtext: string = "";
  qrcode: any;
  errorMessage: any;
  userInfo: boolean = true;

  constructor(public authguard: AuthGuard, private http: Http) {
    console.log(authguard);
    // console.log("Url: " + this.url);
    this.email = this.authguard.email;
    this.name = this.authguard.name;
    this.image = this.authguard.image;
  }

  public ngOnInit() {
    if (this.host == undefined || this.port == undefined) {
      this.url = this.default_url;
    }
    console.log("Url: ", this.url);

  }

  public encode(text: string) {
    if (this.userInfo) {
      text = encodeURIComponent(text.replace("\r", "\n ") + "  \n\n\n" + this.name + "\n" + this.email + "\n");
    }
    this.qrtext = text;
  }
}
