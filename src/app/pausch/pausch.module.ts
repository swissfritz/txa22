import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PauschPageRoutingModule } from './pausch-routing.module';

import { PauschPage } from './pausch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PauschPageRoutingModule
  ],
  declarations: [PauschPage]
})
export class PauschPageModule {}
