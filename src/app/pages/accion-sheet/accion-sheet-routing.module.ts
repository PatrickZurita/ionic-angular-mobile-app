import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccionSheetPage } from './accion-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: AccionSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccionSheetPageRoutingModule {}
