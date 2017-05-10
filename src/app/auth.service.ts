import { CanActivate, ActivatedRoute, Router, Routes } from '@angular/router';
import { AngularFireAuth } from "angularfire2/angularfire2";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

  user;

  authenticated: boolean = false;
  email: string;
  name: string;
  image: string;


  constructor(public auth: AngularFireAuth, public router: Router, public route: ActivatedRoute) {
    console.log('constructor::AuthGuard');

  }

  canActivate(): Observable<boolean> {
    console.log('canActivate::AuthGuard');
    // console.log(JSON.stringify(this.auth.getAuth()));
    return Observable.from(this.auth)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        this.user = this.auth.getAuth();
        // console.log(JSON.stringify(this.user));
        if (!authenticated || this.auth.getAuth() == null) {
          console.log('canActivate::AuthGuard::not-authenticated');
          // console.log('canActivate::AuthGuard::',
          //   JSON.stringify(this.route.data),
          //   JSON.stringify(this.route.params));
          this.authenticated = false;
          this.router.navigate(['/logged-out']);
        } else {
          console.log('canActivate::AuthGuard::authenticated');
          // console.log('canActivate::AuthGuard::',
          //   JSON.stringify(this.route.data),
          //   JSON.stringify(this.route.params));
          this.authenticated = true;
          this.email = this.user.auth.email;
          this.name = this.user.auth.displayName;
          this.image = this.user.auth.photoURL;

        }
      });
  }

  authentication(authenticated) {
    this.authenticated = authenticated;
  }
}
