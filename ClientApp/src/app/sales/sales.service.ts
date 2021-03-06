import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }
 

  public Customers(){
    let url=this.baseUrl+environment.api.customer;
    return this.http.get(url);
  }

  public CustomerById(customrId){
    let url=this.baseUrl+environment.api.customer;
    return this.http.get(url+"/"+customrId);
  }

  public addCustomer(body:any){
    let url=this.baseUrl+environment.api.customer;
    return this.http.post(url, body);
  }

  public updateCustomer(customerId, body: any) {
    let url = this.baseUrl + environment.api.customer;
    return this.http.put(url + '/' + customerId, body);
  }

  //  Vendors API --- MEthods--------------
  public Vendors(){
    let url=this.baseUrl+environment.api.vendor;
    return this.http.get(url);
  }

  public VendorById(Id){
    let url=this.baseUrl+environment.api.vendor;
    return this.http.get(url+"/"+Id);
  }

  public addVendor(body:any){
    let url=this.baseUrl+environment.api.vendor;
    return this.http.post(url, body);
  }

  public updateVendor(Id, body: any) {
    let url = this.baseUrl + environment.api.vendor;
    return this.http.put(url + '/' + Id, body);
  }

  get baseUrl(){
    return environment.baseUrl;
  }

}
