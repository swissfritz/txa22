import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankenstPageRoutingModule } from './tankenst-routing.module';

import { TankenstPage } from './tankenst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankenstPageRoutingModule
  ],
  declarations: [TankenstPage]
})
export class TankenstPageModule {}
