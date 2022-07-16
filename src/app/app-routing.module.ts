import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {LicenceComponent} from "./pages/licence/licence.component";
import {LoginGuard} from "./shared/guard/login.guard";

const routes: Routes = [
  { path: '', canActivate:[LoginGuard], component: LicenceComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
