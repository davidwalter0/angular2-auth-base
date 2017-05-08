import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireModule } from 'angularfire2';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { routes } from './app.routes';

import { MaterialModule } from '@angular/material';
import { MdlModule } from 'angular2-mdl';
import { MdlPopoverModule } from '@angular2-mdl-ext/popover';
import { MdlSelectModule } from '@angular2-mdl-ext/select';
import { firebaseConfigCredentials } from './firebase.credentials';
import { AuthGuard } from './auth.service';
import { EmptyComponent } from './empty/empty.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    AuthenticatedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdlModule,
    MdlPopoverModule,
    MdlSelectModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfigCredentials),
    routes,
  ],
  providers: [
    AuthGuard,
    Location, { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
