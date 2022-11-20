import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankendiPageRoutingModule } from './tankendi-routing.module';

import { TankendiPage } from './tankendi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankendiPageRoutingModule
  ],
  declarations: [TankendiPage]
})
export class TankendiPageModule {}
