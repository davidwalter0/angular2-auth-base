import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { AuthGuard } from './auth.service';

export const router: Routes = [
  { path: '', component: AuthenticatedComponent, canActivate: [AuthGuard] },
  { path: '**', component: EmptyComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
