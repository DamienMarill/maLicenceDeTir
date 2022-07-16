import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from "../services/data.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  private url: string = "";
  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.url = state.url;
    if (this.dataService.islogged()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
