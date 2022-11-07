import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuchenPageRoutingModule } from './buchen-routing.module';

import { BuchenPage } from './buchen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuchenPageRoutingModule
  ],
  declarations: [BuchenPage]
})
export class BuchenPageModule {}
