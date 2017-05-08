import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Title } from '@angular/platform-browser';
import { AuthGuard } from './auth.service';
import { flyInOutTrigger } from './animations/flyInOutTrigger-animation';
import { hostConfig } from './animations/flyInOutTrigger-animation';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  host: hostConfig,
  animations: [
    flyInOutTrigger
  ],
})
export class AppComponent {
  error: any;
  title: string = "Site Title";

  constructor(private angularFire: AngularFire,
    private router: Router,
    private authService: AuthGuard) {
  }

  ngOnInit() {
  }

  logout() {
    this.angularFire.auth.logout();
    this.authService.authentication(false);
    console.log('logged out');
    this.router.navigate(['/logged-out']);
  }

  loginGoogle() {
    this.angularFire.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then(
      (success) => {
        this.authService.authentication(true);
        this.router.navigate(['']);
      })
      .catch((err) => {
        this.authService.authentication(false);
        this.error = err;
      });
  }
  authorized() {
    return this.authService.authenticated;
  }
}
