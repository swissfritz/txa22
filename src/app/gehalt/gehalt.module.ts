import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GehaltPageRoutingModule } from './gehalt-routing.module';

import { GehaltPage } from './gehalt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GehaltPageRoutingModule
  ],
  declarations: [GehaltPage]
})
export class GehaltPageModule {}
