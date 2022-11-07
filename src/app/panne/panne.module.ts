import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PannePageRoutingModule } from './panne-routing.module';

import { PannePage } from './panne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PannePageRoutingModule
  ],
  declarations: [PannePage]
})
export class PannePageModule {}
