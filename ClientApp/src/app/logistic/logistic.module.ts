import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticRoutingModule } from './logistic-routing.module';
import { LogisticComponent } from './logistic.component';
import { ItemsComponent } from './items/items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material-module';


@NgModule({
  declarations: [LogisticComponent, ItemsComponent, AddItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    LogisticRoutingModule
  ]
})
export class LogisticModule { }
