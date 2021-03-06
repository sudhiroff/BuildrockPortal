import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { CustomersComponent } from './customers/customers.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'vendors', component: VendorsComponent },
  { path: 'new-customer', component: AddCustomerComponent },
  { path: 'view-customer/:id', component: AddCustomerComponent },
  { path: 'edit-customer/:id', component: AddCustomerComponent },
  { path: 'new-vendor', component: AddVendorComponent },
  { path: 'view-vendor/:id', component: AddVendorComponent },
  { path: 'edit-vendor/:id', component: AddVendorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
