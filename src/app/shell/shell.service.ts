import { AccessGuard } from './access.guard';
import { Routes, Route } from '@angular/router';

import { AuthenticationGuard } from '@app/auth';
import { ShellComponent } from './shell.component';

export class Shell {

  static childRoutes(routes: Routes, routerLink: string): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      canActivate: [AuthenticationGuard, AccessGuard],
      data: {
        routerLink: routerLink
      }
    };
  }


}
