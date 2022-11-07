import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnfallPageRoutingModule } from './unfall-routing.module';

import { UnfallPage } from './unfall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnfallPageRoutingModule
  ],
  declarations: [UnfallPage]
})
export class UnfallPageModule {}
