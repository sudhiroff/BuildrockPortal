import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemsComponent } from './items/items.component';

import { LogisticComponent } from './logistic.component';

const routes: Routes = [
  { path: '', component: LogisticComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'view-item/:Id', component: AddItemComponent },
  { path: 'edit-item/:Id', component: AddItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogisticRoutingModule { }
