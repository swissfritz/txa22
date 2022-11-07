import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegelnPageRoutingModule } from './regeln-routing.module';

import { RegelnPage } from './regeln.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegelnPageRoutingModule
  ],
  declarations: [RegelnPage]
})
export class RegelnPageModule {}
