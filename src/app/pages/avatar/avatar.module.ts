import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarPageRoutingModule } from './avatar-routing.module';

import { AvatarPage } from './avatar.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [AvatarPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarPageRoutingModule,
    ComponentsModule,
  ],
})
export class AvatarPageModule {}
