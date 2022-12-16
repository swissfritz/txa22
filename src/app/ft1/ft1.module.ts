import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ft1PageRoutingModule } from './ft1-routing.module';

import { Ft1Page } from './ft1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Ft1PageRoutingModule
  ],
  declarations: [Ft1Page]
})
export class Ft1PageModule {}
