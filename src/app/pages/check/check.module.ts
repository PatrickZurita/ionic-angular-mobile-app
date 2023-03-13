import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckPageRoutingModule } from './check-routing.module';

import { CheckPage } from './check.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [CheckPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckPageRoutingModule,
    ComponentsModule,
  ],
})
export class CheckPageModule {}
