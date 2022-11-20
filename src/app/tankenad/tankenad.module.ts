import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankenadPageRoutingModule } from './tankenad-routing.module';

import { TankenadPage } from './tankenad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankenadPageRoutingModule
  ],
  declarations: [TankenadPage]
})
export class TankenadPageModule {}
