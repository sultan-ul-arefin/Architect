import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

let Modules = {
  about: 'about',
  settings: 'settings',
}
const routes: Routes = [
  Shell.childRoutes([{ path: Modules.about, loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }], Modules.about),
  Shell.childRoutes([{ path: Modules.settings, loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule) }], Modules.settings),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
