import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliPageRoutingModule } from './poli-routing.module';

import { PoliPage } from './poli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliPageRoutingModule
  ],
  declarations: [PoliPage]
})
export class PoliPageModule {}
