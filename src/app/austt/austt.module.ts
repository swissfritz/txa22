import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AusttPageRoutingModule } from './austt-routing.module';

import { AusttPage } from './austt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AusttPageRoutingModule
  ],
  declarations: [AusttPage]
})
export class AusttPageModule {}
