import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpauPageRoutingModule } from './ppau-routing.module';

import { PpauPage } from './ppau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpauPageRoutingModule
  ],
  declarations: [PpauPage]
})
export class PpauPageModule {}
