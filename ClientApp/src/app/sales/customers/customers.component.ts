import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public CustomerList:Array<any>=[];
  constructor(private sharedService:SharedService,private salesSvc:SalesService) { }

  ngOnInit() {
    this.sharedService.breadcrumbTitle = "Customers";

    this.salesSvc.Customers()
    .subscribe((res:any)=>{
      this.CustomerList=res;
    })
  }

}
