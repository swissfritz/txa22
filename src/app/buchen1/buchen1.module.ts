import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Buchen1PageRoutingModule } from './buchen1-routing.module';

import { Buchen1Page } from './buchen1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Buchen1PageRoutingModule
  ],
  declarations: [Buchen1Page]
})
export class Buchen1PageModule {}
