import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamprPageRoutingModule } from './campr-routing.module';

import { CamprPage } from './campr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamprPageRoutingModule
  ],
  declarations: [CamprPage]
})
export class CamprPageModule {}
