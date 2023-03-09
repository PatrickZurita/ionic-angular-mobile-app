import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccionSheetPageRoutingModule } from './accion-sheet-routing.module';

import { AccionSheetPage } from './accion-sheet.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [AccionSheetPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccionSheetPageRoutingModule,
    ComponentsModule,
  ],
})
export class AccionSheetPageModule {}
