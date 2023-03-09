import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'alert',
    loadChildren: () =>
      import('./pages/alert/alert.module').then((m) => m.AlertPageModule),
  },
  {
    path: 'accion-sheet',
    loadChildren: () =>
      import('./pages/accion-sheet/accion-sheet.module').then(
        (m) => m.AccionSheetPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
