import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankenPageRoutingModule } from './tanken-routing.module';

import { TankenPage } from './tanken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankenPageRoutingModule
  ],
  declarations: [TankenPage]
})
export class TankenPageModule {}
