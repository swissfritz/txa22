import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnfmainPageRoutingModule } from './unfmain-routing.module';

import { UnfmainPage } from './unfmain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnfmainPageRoutingModule
  ],
  declarations: [UnfmainPage]
})
export class UnfmainPageModule {}
