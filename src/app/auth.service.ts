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

  authenticated: boolean = false;

  constructor(public auth: AngularFireAuth, public router: Router, public route: ActivatedRoute) {
    console.log('constructor::AuthGuard');

  }

  canActivate(): Observable<boolean> {
    console.log('canActivate::AuthGuard');
    return Observable.from(this.auth)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        if (!authenticated) {
          console.log('canActivate::AuthGuard::not-authenticated');
          console.log('canActivate::AuthGuard::',
            JSON.stringify(this.route.data),
            JSON.stringify(this.route.params));
          this.authenticated = false;
          this.router.navigate(['/logged-out']);
        } else {
          console.log('canActivate::AuthGuard::authenticated');
          console.log('canActivate::AuthGuard::',
            JSON.stringify(this.route.data),
            JSON.stringify(this.route.params));
          this.authenticated = true;
        }
      });
  }

  authentication(authenticated) {
    this.authenticated = authenticated;
  }
}
