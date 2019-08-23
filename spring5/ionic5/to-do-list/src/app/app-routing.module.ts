import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'contactos', loadChildren: './contactos/contactos.module#ContactosPageModule' },
  { path: 'agregar', loadChildren: './agregar/agregar.module#AgregarPageModule' },
  { path: 'agregar/:id', loadChildren: './agregar/agregar.module#AgregarPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
