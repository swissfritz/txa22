import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProzPageRoutingModule } from './proz-routing.module';

import { ProzPage } from './proz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProzPageRoutingModule
  ],
  declarations: [ProzPage]
})
export class ProzPageModule {}
