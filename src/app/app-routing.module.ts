import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisosGuard } from './permisos.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((module) => module.ContactModule),
  },
  {
    path: 'guard',
    loadChildren: () =>
      import('./guard/guard.module').then((module) => module.GuardModule),
      canActivate: [PermisosGuard]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'carro',
    loadChildren: () =>
      import('./carro/carro.module').then((module) => module.CarroModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
