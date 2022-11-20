import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bu2PageRoutingModule } from './bu2-routing.module';

import { Bu2Page } from './bu2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bu2PageRoutingModule
  ],
  declarations: [Bu2Page]
})
export class Bu2PageModule {}
