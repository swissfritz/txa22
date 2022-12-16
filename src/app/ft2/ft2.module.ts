import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ft2PageRoutingModule } from './ft2-routing.module';

import { Ft2Page } from './ft2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Ft2PageRoutingModule
  ],
  declarations: [Ft2Page]
})
export class Ft2PageModule {}
