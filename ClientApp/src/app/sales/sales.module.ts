import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { VendorsComponent } from './vendors/vendors.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material-module';


@NgModule({
  declarations: [
    CustomersComponent, 
    VendorsComponent, 
    AddVendorComponent, 
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ]
})
export class SalesModule { }
