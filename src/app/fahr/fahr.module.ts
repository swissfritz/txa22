import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FahrPageRoutingModule } from './fahr-routing.module';

import { FahrPage } from './fahr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FahrPageRoutingModule
  ],
  declarations: [FahrPage]
})
export class FahrPageModule {}
