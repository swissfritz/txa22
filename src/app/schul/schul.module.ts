import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchulPageRoutingModule } from './schul-routing.module';

import { SchulPage } from './schul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchulPageRoutingModule
  ],
  declarations: [SchulPage]
})
export class SchulPageModule {}
