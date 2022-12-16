import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Buchen2PageRoutingModule } from './buchen2-routing.module';

import { Buchen2Page } from './buchen2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Buchen2PageRoutingModule
  ],
  declarations: [Buchen2Page]
})
export class Buchen2PageModule {}
