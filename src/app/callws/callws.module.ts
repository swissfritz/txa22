import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallwsPageRoutingModule } from './callws-routing.module';

import { CallwsPage } from './callws.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallwsPageRoutingModule
  ],
  declarations: [CallwsPage]
})
export class CallwsPageModule {}
