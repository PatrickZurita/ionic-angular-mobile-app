import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateTimePageRoutingModule } from './date-time-routing.module';

import { DateTimePage } from './date-time.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [DateTimePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateTimePageRoutingModule,
    ComponentsModule,
  ],
})
export class DateTimePageModule {}
