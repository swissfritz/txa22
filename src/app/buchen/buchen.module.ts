import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuchenPageRoutingModule } from './buchen-routing.module';

import { BuchenPage } from './buchen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BuchenPageRoutingModule
  ],
  declarations: [BuchenPage]
})
export class BuchenPageModule {}
