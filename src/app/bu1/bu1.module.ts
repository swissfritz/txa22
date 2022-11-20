import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bu1PageRoutingModule } from './bu1-routing.module';

import { Bu1Page } from './bu1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Bu1PageRoutingModule
  ],
  declarations: [Bu1Page]
})
export class Bu1PageModule {}
