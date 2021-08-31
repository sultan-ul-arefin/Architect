import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Logger } from '@core';

const log = new Logger('AccessGuard');

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  user: any = {
    role: "Manager" // aita asbe user er data theke
  }

  menu: any

  constructor(private router: Router) {

    this.menu = this.getData('menu') // aita asbe settings er data theke or send through dynamic routet systetm
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let routerLink = route.data['routerLink']
    for (let i = 0; i < this.menu.length; i++) {
      if (routerLink == this.menu[i].link) {
        if (this.menu[i][this.user.role] === true) {
          return true;
        }
      }

    }


    log.debug(`Not allow to access ${routerLink} route !`);
    this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }
  getData(key: string) {
    let data = localStorage.getItem(key)
    return JSON.parse(data)
  }


}
