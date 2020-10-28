import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticRoutingModule } from './logistic-routing.module';
import { LogisticComponent } from './logistic.component';


@NgModule({
  declarations: [LogisticComponent],
  imports: [
    CommonModule,
    LogisticRoutingModule
  ]
})
export class LogisticModule { }
