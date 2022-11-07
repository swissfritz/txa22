import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WerprPageRoutingModule } from './werpr-routing.module';

import { WerprPage } from './werpr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WerprPageRoutingModule
  ],
  declarations: [WerprPage]
})
export class WerprPageModule {}
