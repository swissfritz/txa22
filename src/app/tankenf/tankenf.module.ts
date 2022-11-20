import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankenfPageRoutingModule } from './tankenf-routing.module';

import { TankenfPage } from './tankenf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankenfPageRoutingModule
  ],
  declarations: [TankenfPage]
})
export class TankenfPageModule {}
